import React from 'react'
import Header from './Components/Header'
import ProductsList from './Components/ProductsList'
import { Provider } from 'react-redux'
import store from './redux/store'
import MyCart from './Components/MyCart'


const ShoppingCart = () => {
    return (
        <Provider store={store}>       
            <Header />
            <ProductsList />
            <MyCart />
        </Provider>
    )
}

export default ShoppingCart
