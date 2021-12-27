import React from 'react'
import MyProducts from './MyProducts'
import Total from './Total'

const MyCart = () => {
    return (
        <div>
            <h2>My Cart</h2>
            <MyProducts />
            <Total /> 
        </div>
    )
}

export default MyCart
