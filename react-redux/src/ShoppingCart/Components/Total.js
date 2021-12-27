import React from 'react'
import { connect } from 'react-redux'
import { checkOut } from '../redux/shoppingActions';

function showMessage(total){
    let message = total ? `Total : ${total} $` : `Add Items to cart`
    return message
}

const Total = ({ checkOut, total, message }) => {
    return (
        <div>
            {message ? <div> { message } </div> : 
            <div>
                <div>
                    {showMessage(Math.round(total * 10) / 10)}
                </div>
                <br></br>
                <div>
                    <button onClick={() => checkOut()}>Check Out</button> 
                </div>
            </div>
            }  
        </div>
    )
}


const mapStateToProps = state => {
    return{
        total: state.cart.total,
        message: state.cart.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkOut: (total) => dispatch(checkOut(total)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Total)
