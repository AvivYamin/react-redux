import React from 'react'
import { connect } from 'react-redux'
import { addIpadToCart, addToCart } from '../redux/shoppingActions' 

function Ipad({ ipadPrice, ipadStock, ipadTitle, addIpad, addToCart }) {
    return (
        <div>
            <h3>{ `${ipadTitle} : ${ipadPrice}$ X ${ipadStock}` }</h3>
            {ipadStock ? <button onClick={ () => { addIpad(); addToCart(ipadPrice)}}>Add To Cart</button> : <button disabled>Out Of Stock</button>}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        ipadStock: state.ipad.ipadStock,
        ipadPrice: state.ipad.ipadPrice,
        ipadTitle: state.ipad.ipadTitle,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIpad: () => dispatch(addIpadToCart()),
        addToCart: (ipadPrice) => dispatch(addToCart(ipadPrice))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ipad)
