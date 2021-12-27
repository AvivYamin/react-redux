import React from 'react'
import { connect } from 'react-redux'
import { checkOut } from '../redux/shoppingActions';

function calculateTotal(numOfIpads, numOfShirts, numOfCds, ipadPrice, shirtPrice, cdPrice){
    let total = numOfIpads * ipadPrice + numOfShirts * shirtPrice + numOfCds * cdPrice;
    return Math.round(total * 10) / 10
}

function showMessage(total){
    let message = total ? `Total : ${total} $` : `Add Items to cart`
    return message
}

const Total = ({ myIpads, myShirts, myCds, ipadPrice, shirtPrice, cdPrice, total, checkOut}) => {
    return (
        <div>
            {showMessage(calculateTotal(myIpads, myShirts, myCds, ipadPrice, shirtPrice, cdPrice))}
            <div>
                <button onClick={checkOut}>Check Out</button> 
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        myIpads: state.ipad.myIpads,
        myShirts: state.shirt.myShirts,
        myCds: state.cd.myCds,
        ipadPrice: state.ipad.ipadPrice,
        shirtPrice: state.shirt.shirtPrice,
        cdPrice: state.cd.cdPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkOut: () => dispatch(checkOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Total)
