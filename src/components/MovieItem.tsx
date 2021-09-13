import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { getGenreNameFromId } from '../utils/getGenreNameFromId'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 420,
  },
}))

type MovieItemType = {
  id: string
  original_title: string
  genre_ids: number[]
  poster_path: string
  release_date: string
}

const MovieItem: React.FC<MovieItemType> = ({
  id,
  original_title,
  genre_ids,
  poster_path,
  release_date,
}) => {
  const classes = useStyles()

  const hanldeSaveFavourite = () => {
    const favouriteMovies = localStorage.getItem('favourite') || ''
    let parsedFavourite: Record<string, any> = {}

    if (favouriteMovies) {
      parsedFavourite = JSON.parse(favouriteMovies)
    }

    if (parsedFavourite[id]) {
      delete parsedFavourite[id]
    } else {
      parsedFavourite[id] = { id, original_title, genre_ids, poster_path }
    }

    localStorage.setItem('favourite', JSON.stringify(parsedFavourite))
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`https://image.tmdb.org/t/p/original/${poster_path}`}
        title={original_title}
      />
      <CardContent>
        <Typography variant='h6' component='h2'>
          {original_title}
        </Typography>
        <Typography variant='h5' component='h2'></Typography>
        <Typography color='textSecondary'>
          {genre_ids.map((id) => getGenreNameFromId(id)).join(', ')}
        </Typography>
        <Typography variant='body2' component='p'>
          {release_date}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites' onClick={hanldeSaveFavourite}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default MovieItem
