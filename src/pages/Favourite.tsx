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

import MovieItem from '../components/MovieItem'
import SearchBar from '../components/SearchBar'
import Api from '../utils/api'
import Dropdown from '../components/FilterDropdown'
import FilterYearInput from '../components/FilterYearInput'
import { filterBy } from '../utils/common'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  body: {
    margin: theme.spacing(4, 0),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export const FavoritePage = () => {
  const classes = useStyles()
  const [list, setList] = useState([])

  useEffect(() => {
    const favouriteItem = localStorage.getItem('favourite') || ''

    console.log(Object.values(JSON.parse(favouriteItem)))

    setList(Object.values(JSON.parse(favouriteItem)))
  }, [])

  return (
    <Container className={classes.body}>
      <Grid container spacing={3}>
        {list?.map(
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
