import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Header from './components/organisms/Header'
import LoginPage from './pages/Login'
import MainPage from './pages/Main'
import NotFound from './pages/NotFound'
import OrderListPage from './pages/OrderList'
import OrderDetailPage from './pages/OrderList/OrderDetail'
import RegisterPage from './pages/Register'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/mypage/order" component={OrderListPage} exact />
        <Route path="/mypage/order/:id" component={OrderDetailPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/sign-up" component={RegisterPage} exact />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
