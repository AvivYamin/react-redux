import React from 'react'
import { connect } from 'react-redux'



const MyProducts = ({ myIpads, myShirts, myCds }) => {
    return (
        <div>
            {myIpads ? <div> { `My Ipads : ${myIpads}` } </div> : ''}
            
            {myShirts ? <div> { `My Shirts : ${myShirts}` } </div> : ''}
        
            {myCds ? <div> { `My CD's : ${myCds}` } </div> : ''}
            
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
