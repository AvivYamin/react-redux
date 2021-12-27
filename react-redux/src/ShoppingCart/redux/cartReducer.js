import { CHECK_OUT } from "./shoppingActionTypes";
import store from "./store";

const initialState = {
    // myIpads: store.getState().ipad.myIpads,
    // myShirts: store.getState().shit.myShirts,
    // myCds: store.getState().cd.myCds,
    // ipadPrice: store.getState().ipad.ipadPrice,
    // shirtPrice: store.getState().shirt.shirtPrice,
    // cdPrice: store.getState().cd.cdPrice,
    total: 0,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_OUT:
            return { 
                ...state,
                total: state.total + 1,
            };
            
        default:
            return state;
    }
}
