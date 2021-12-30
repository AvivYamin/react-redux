import { combineReducers } from "redux";
import { navReducer } from "../Components/Header/navReducer"

export default combineReducers({ 
    nav: navReducer
})
