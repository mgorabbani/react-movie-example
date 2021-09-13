import React from 'react'
import { Route, Switch } from 'react-router'
import { FavoritePage } from './pages/Favourite'
import HomePage from './pages/Home'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/favourite'>
        <FavoritePage />
      </Route>
    </Switch>
  )
}

export default Routes
