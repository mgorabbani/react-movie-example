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
  const [list, setList] = useState([])

  useEffect(() => {
    // API
    Api.get('/search/movie', { params: { query: searchValue } }).then((r) => {
      console.log(r.data.results)
      setList(r.data.results)
    })
  }, [searchValue])
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
            <Dropdown />
            <Dropdown />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {list?.map(({ id, original_title, genre_ids, poster_path }) => {
          return (
            <Grid item xs={3} key={id}>
              <MovieItem {...{ id, original_title, genre_ids, poster_path }} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default App
