import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'
import SignUp from './components/core/SignUp'
import SignIn from './components/core/SignIn'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/'  component={Home} exact></Route>
        <Route path='/shop'  component={Shop}></Route>
        <Route path='/signup'  component={SignUp} ></Route>
        <Route path='/signin'  component={SignIn}></Route>
      </Switch>
    </HashRouter>
  )
}

export default Routes
