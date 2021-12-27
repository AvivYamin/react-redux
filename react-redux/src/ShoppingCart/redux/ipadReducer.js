import { ADD_IPAD_TO_CART } from "./shoppingActionTypes";
import store from "./store";
const data = require("../data/products.json")

const initialState = {
    ipadStock: data[0].stock,
    ipadPrice: data[0].price,
    ipadTitle: data[0].item,
    myIpads: 0,
    // total: store.getState().total
}

export const ipadReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IPAD_TO_CART:
            return { 
                ...state,
                ipadStock: state.ipadStock - 1,
                myIpads: state.myIpads + 1,
                // total: state.total + state.ipadPrice
            };
            
        default:
            return state;
    }
}