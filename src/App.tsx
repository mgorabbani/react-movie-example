import React, { useEffect, useState } from 'react'
import {
  AppBar,
  Button,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
  Link,
} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom'

import MovieItem from './components/MovieItem'
import SearchBar from './components/SearchBar'
import Api from './utils/api'
import Dropdown from './components/FilterDropdown'
import FilterYearInput from './components/FilterYearInput'
import { filterBy } from './utils/common'
import Home from './pages/Home'
import HomePage from './pages/Home'
import { FavoritePage } from './pages/Favourite'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    margin: theme.spacing(4, 0),
  },
  logo: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  link: {
    color: '#fff',
    marginLeft: theme.spacing(2),
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
    <Router>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.logo}>
              MVP Match Movie
            </Typography>
            <Grid>
              <Link
                to='/'
                component={RouterLink}
                underline='none'
                className={classes.link}
              >
                Home
              </Link>
              <Link
                to='/favourite'
                component={RouterLink}
                className={classes.link}
                underline='none'
              >
                Favourite
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/favourite'>
            <FavoritePage />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
