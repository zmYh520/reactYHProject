import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'
import SignUp from './components/core/SignUp'
import SignIn from './components/core/SignIn'
import Dashboard from './components/admin/Dashboard'
import PrivateRouter from './components/admin/PrivateRouter'
import AdminRoute from './components/admin/AdminRoutes'
import AdminDashboard from './components/admin/AdminDashboard'
import AddCategory from './components/admin/AddCategory'
import AddProduction from './components/admin/AddProduction'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/'  component={Home} exact></Route>
        <Route path='/shop'  component={Shop}></Route>
        <Route path='/signup'  component={SignUp} ></Route>
        <Route path='/signin'  component={SignIn}></Route>
        <PrivateRouter path='/user/dashboard'  component={Dashboard}></PrivateRouter>
        <AdminRoute  path='/admin/dashboard'  component={AdminDashboard}></AdminRoute>
        <AdminRoute path='/create/categoty' component={AddCategory}></AdminRoute>
        <AdminRoute path='/create/product' component={AddProduction}></AdminRoute>
      </Switch>
    </HashRouter>
  )
}

export default Routes
