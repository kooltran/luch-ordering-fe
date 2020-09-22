import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Orders from './pages/Orders/Orders'
import OrderList from './pages/Orders/OrderList'
import OrderListHistory from './pages/Orders/OrderHistory'
import Login from './components/Auth/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Logo from './assets/logo.svg'

import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <div className='main-wrapper'>
      <div className='container'>
        <a href='/lunch-ordering-fe' className='main-logo'>
          <img src={Logo} alt='logo' />
        </a>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/orders'>
              <Orders />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/all-orders' component={OrderList} />
            <PrivateRoute path='/orders-history' component={OrderListHistory} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
