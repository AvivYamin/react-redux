import React from 'react'
import { connect } from 'react-redux'
import { addShirtToCart, addToCart } from '../redux/shoppingActions' 

function Shirt({ shirtPrice, shirtStock, shirtTitle, addToCart, addShirt }) {
    return (
        <div>
            <h3>{ `${shirtTitle} : ${shirtPrice}$ X ${shirtStock}` }</h3>
            {shirtStock ? <button onClick={ () => { addShirt(); addToCart(shirtPrice)}}>Add To Cart</button> : <button disabled>Out Of Stock</button>}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        shirtStock: state.shirt.shirtStock,
        shirtPrice: state.shirt.shirtPrice,
        shirtTitle: state.shirt.shirtTitle,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addShirt: () => dispatch(addShirtToCart()),
        addToCart: (shirtPrice) => dispatch(addToCart(shirtPrice))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shirt)
