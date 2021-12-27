import React from 'react'
import { connect } from 'react-redux'
import { addCdToCart, addToCart } from '../redux/shoppingActions' 

function CD({ cdTitle, cdPrice, cdStock, addCd, addToCart }) {
    return (
        <div>
            <h3>{ `${cdTitle} : ${cdPrice}$ X ${cdStock}` }</h3>
            {cdStock ? <button onClick={ () => { addCd(); addToCart(cdPrice)}}>Add To Cart</button> : <button disabled>Out Of Stock</button>}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        cdStock: state.cd.cdStock,
        cdPrice: state.cd.cdPrice,
        cdTitle: state.cd.cdTitle,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCd: () => dispatch(addCdToCart()),
        addToCart: (cdPrice) => dispatch(addToCart(cdPrice))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CD)