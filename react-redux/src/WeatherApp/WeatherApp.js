import React from 'react'
import { Provider } from 'react-redux'
import weatherStore from './redux/weatherStore';
import Header from './Components/Header/Header'
import General from './Components/General/Genreal';

export const apiKey = process.env.REACT_APP_API_KEY;

const WeatherApp = () => {
    return (
        <div>
            <Provider store={weatherStore}>
                <Header />
                <General />
            </ Provider>
        </div>
    )
}

export default WeatherApp

