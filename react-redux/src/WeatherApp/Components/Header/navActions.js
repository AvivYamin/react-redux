import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../../redux/actionsTypes";
import axios from 'axios';
import { apiKey } from "../../WeatherApp";

export const fetchDataRequest = () => {
    return{
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (name, id, main, sys, visibility, wind, timezone) => {
    return{
        type: FETCH_DATA_SUCCESS,
        name,
        id,
        main,
        sys,
        visibility,
        wind,
        timezone
    }
}

export const fetchDataFailure = error => {
    return{
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const fetchData = (cityName) => {
    console.log()
    return (dispatch) => {

        dispatch(fetchDataRequest());

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
        .then( response => {

            const data = response.data;
            const { name, id, main, sys, visibility, wind, timezone } = data;

            dispatch(fetchDataSuccess(name, id, main, sys, visibility, wind, timezone));
        })
        .catch(error => {
            
            const errMsg = error.message;

            dispatch(fetchDataFailure(errMsg));
        })
    }
}