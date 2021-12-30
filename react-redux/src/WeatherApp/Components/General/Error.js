import React from 'react'
import { useSelector } from 'react-redux'

const Error = () => {
    const error = useSelector(state => state.nav.error);
    return (
        <div>
            <h2>{error}</h2>
        </div>
    )
}

export default Error
