import { combineReducers } from "redux";
import { ipadReducer } from "./ipadReducer";
import { shirtReducer } from "./shirtReducer";
import { cdReducer } from "./cdReducer";
import { cartReducer } from "./cartReducer";

// export default combineReducers({ 
//     ipad: ipadReducer,
//     shirt: shirtReducer,
//     cd: cdReducer,
//     cart: cartReducer, 
// })

export const rootReducer = (state = {}, action) => {
     return{
        ipad: ipadReducer(state.ipadReducer, action, state),
        shirt: shirtReducer(state.shirtReducer, action, state),
        cd: cdReducer(state.cdReducer, action, state),
        cart: cartReducer(state.cartReducer, action),
    }
}