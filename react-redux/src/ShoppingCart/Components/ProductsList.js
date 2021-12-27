import React from 'react'
import Ipad from './Ipad'
import Shirt from './Shirt'
import CD from './CD'


const ProductsList = () => {
    return (
        <div>
            <h2>Products</h2>
            <Ipad />
            <Shirt />
            <CD />
        </div>
    )
}

export default ProductsList
