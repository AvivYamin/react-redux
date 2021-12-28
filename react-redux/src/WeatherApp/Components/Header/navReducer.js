import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../../redux/actionsTypes";

const initialState = {
    loading: false,
    error: "",
    cityId: null,
    cityName: "",
    countryName: "",
    visibility: null,
    temp: null,
    feelsLike:null,
    windSpeed: null,
    windDegree: null,
    sunRise: null,
    sunSet: null,
    timeZone: null
}

export const navReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return{
                ...state,
                loading: true
            }

        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                loading: initialState.loading,
                error: initialState.error,
                cityId: action.id,
                cityName: action.name,
                countryName: action.sys.country,
                visibility: action.visibility,
                temp: action.main.temp,
                feelsLike: action.main.feels_like, 
                windSpeed: action.wind.speed,
                windDegree: action.wind.deg,
                sunRise: action.sys.sunrise,
                sunSet: action.sys.sunset,
                timeZone: action.timezone    
            }

        case FETCH_DATA_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
                cityName: initialState.name,
                cityId: initialState.id
            }

        default:
            return state;
    }
}