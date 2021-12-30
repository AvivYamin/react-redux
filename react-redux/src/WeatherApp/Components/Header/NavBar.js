import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from './navActions';

const NavBar = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(fetchData("London"))}>London</button>
            <button onClick={() => dispatch(fetchData("Sydney"))}>Sydney</button>
            <button onClick={() => dispatch(fetchData("Tokyo"))}>Tokyo</button>
            <button onClick={() => dispatch(fetchData("Jerusalem"))}>Jerusalem</button>
        </div>
    )
}

export default NavBar
