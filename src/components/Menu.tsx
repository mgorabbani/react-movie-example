import React from 'react'
import {
  AppBar,
  Grid,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
  },

  link: {
    color: '#fff',
    marginLeft: theme.spacing(2),
  },
}))

const Menu = () => {
  const classes = useStyles()

  return (
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
  )
}

export default Menu
