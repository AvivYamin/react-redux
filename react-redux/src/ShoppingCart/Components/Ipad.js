import React from 'react'
import { connect } from 'react-redux'
import { addIpadToCart } from '../redux/shoppingActions' 

function Ipad(props) {
    return (
        <div>
            <h3>{ `${props.ipadTitle} : ${props.ipadPrice}$ X ${props.ipadStock}` }</h3>
            {props.ipadStock ? <button onClick={props.addIpad}>Add To Cart</button> : <button disabled>Out Of Stock</button>}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ipad)
