import { combineReducers } from "redux";
import { ipadReducer } from "./ipadReducer";
import { shirtReducer } from "./shirtReducer";
import { cdReducer } from "./cdReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers({ 
    ipad: ipadReducer,
    shirt: shirtReducer,
    cd: cdReducer,
    cart: cartReducer, 
})
