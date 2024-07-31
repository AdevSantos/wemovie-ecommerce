import React from 'react'
import Header from 'container/header'
import Router from 'router'
import { CartProvider } from 'hooks'

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Router />
    </CartProvider>
  )
}

export default App
