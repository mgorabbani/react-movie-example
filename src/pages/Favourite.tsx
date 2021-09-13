import React, { useEffect, useState } from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'

import MovieItem from '../components/MovieItem'

const useStyles = makeStyles((theme) => ({
  body: {
    margin: theme.spacing(4, 0),
  },
}))

export const FavoritePage = () => {
  const classes = useStyles()
  const [list, setList] = useState([])

  useEffect(() => {
    const favouriteItem = localStorage.getItem('favourite') || '[]'
    setList(Object.values(JSON.parse(favouriteItem)))
  }, [])

  if (list.length === 0) {
    return <div>You have no Favourite Movie!</div>
  }
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
