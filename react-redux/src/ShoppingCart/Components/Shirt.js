import React from 'react'
import { connect } from 'react-redux'
import { addShirtToCart } from '../redux/shoppingActions' 

function Shirt(props) {
    return (
        <div>
            <h3>{ `${props.shirtTitle} : ${props.shirtPrice}$ X ${props.shirtStock}` }</h3>
            {props.shirtStock ? <button onClick={props.addShirt}>Add To Cart</button> : <button disabled>Out Of Stock</button>}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shirt)
