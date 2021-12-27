import React from 'react'
import { connect } from 'react-redux'
import { addCdToCart } from '../redux/shoppingActions' 

function CD(props) {
    return (
        <div>
            <h3>{ `${props.cdTitle} : ${props.cdPrice}$ X ${props.cdStock}` }</h3>
            {props.cdStock ? <button onClick={props.addCd}>Add To Cart</button> : <button disabled>Out Of Stock</button>}
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CD)