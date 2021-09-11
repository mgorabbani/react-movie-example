import React, { useEffect, useState } from 'react'
import {
  AppBar,
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core'
import MovieItem from './components/MovieItem'
import SearchBar from './components/SearchBar'
import Api from './utils/api'
import Dropdown from './components/Dropdown'

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
  const [genres, setGenres] = useState<Record<string, string>[]>([])
  const [list, setList] = useState([])

  useEffect(() => {
    Api.get('/search/movie', { params: { query: searchValue } }).then((r) => {
      console.log(r.data.results)
      setList(r.data.results)
    })
  }, [searchValue])

  useEffect(() => {
    Api.get('/genre/movie/list').then((r) => {
      setGenres(r.data.genres)
    })
  }, [])

  const filterBy = () => {
    const year = 2021
    console.log(list)
    const genre = 33
    const filteredList = list.filter(({ release_date }: any) =>
      release_date?.contains(year),
    )
    setList(filteredList)
    list.filter(({ genre_ids }: any) => {})
  }

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
            <Dropdown
            // menu={{label:'Year',value:'value'},}
            />
            <Dropdown />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {list?.map(({ id, original_title, genre_ids, poster_path }) => {
          return (
            <Grid item xs={3} key={id}>
              <MovieItem
                {...{ id, original_title, genre_ids, poster_path, genres }}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default App
