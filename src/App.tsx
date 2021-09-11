import React, { useEffect, useState } from 'react'
import {
  AppBar,
  Button,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import MovieItem from './components/MovieItem'
import SearchBar from './components/SearchBar'
import Api from './utils/api'
import Dropdown from './components/FilterDropdown'
import FilterYearInput from './components/FilterYearInput'
import { filterBy } from './utils/common'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    margin: theme.spacing(4, 0),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function App() {
  const classes = useStyles()
  const [searchValue, setSearchValue] = useState('')
  const [genreId, setGenreId] = useState('')
  const [year, setYear] = useState('')
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])

  useEffect(() => {
    if (searchValue) {
      Api.get('/search/movie', { params: { query: searchValue } }).then((r) => {
        setList(r.data.results)
        setFilteredList(r.data.results)
      })
    }
  }, [searchValue])

  useEffect(() => {
    console.log(year, genreId)

    if (year || genreId) {
      const filterdList = filterBy(genreId, year, list)
      setFilteredList(filterdList)
      console.log(filterdList)
    } else {
      setFilteredList(list)
    }
  }, [genreId, year])

  return (
    <Container>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>MVP Match Movie</Typography>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>Favourite</Button>
        </Toolbar>
      </AppBar>

      <Grid container justifyContent='space-between' className={classes.header}>
        <Grid item md={4}>
          <SearchBar setSearchValue={setSearchValue} />
        </Grid>
        <Grid item md={3}>
          <Grid container>
            <Dropdown setGenreId={setGenreId} genreId={genreId} />
            <FilterYearInput setYear={setYear} year={year} />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {filteredList?.map(
          ({ id, original_title, genre_ids, poster_path, release_date }) => {
            return (
              <Grid item xs={3} key={id}>
                <MovieItem
                  {...{
                    id,
                    original_title,
                    genre_ids,
                    poster_path,
                    release_date,
                  }}
                />
              </Grid>
            )
          },
        )}
      </Grid>
    </Container>
  )
}

export default App
