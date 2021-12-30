import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {
    const loading = useSelector(state => state.loading);
    return (
        <div>
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading
