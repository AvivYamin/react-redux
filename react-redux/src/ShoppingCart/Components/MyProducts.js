import React from 'react'
import { connect } from 'react-redux'



const MyProducts = ({ myIpads, myShirts, myCds }) => {
    return (
        <div>
            {myIpads ? `My Ipads : ${myIpads}` : ''}
            <br></br>
            {myShirts ? `My Shirts : ${myShirts}` : ''}
            <br></br>
            {myCds ? `My CD's : ${myCds}` : ''}
            <br></br>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        myIpads: state.ipad.myIpads,
        myShirts: state.shirt.myShirts,
        myCds: state.cd.myCds,
    }
}
export default connect(mapStateToProps, null)(MyProducts)
