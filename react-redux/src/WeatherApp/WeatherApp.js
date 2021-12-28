import React from 'react'
import Header from './Components/Header/Header'

const apiKey = process.env.REACT_APP_API_KEY;

const WeatherApp = () => {
    return (
        <div>
            <Header />
        </div>
    )
}

export default WeatherApp
