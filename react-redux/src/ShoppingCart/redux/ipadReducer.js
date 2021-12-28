import { ADD_IPAD_TO_CART, CHECK_OUT } from "./shoppingActionTypes";
const data = require("../data/products.json")

const initialState = {
    ipadStock: data[0].stock,
    ipadPrice: data[0].price,
    ipadTitle: data[0].item,
    myIpads: 0,
}

export const ipadReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IPAD_TO_CART:
            return { 
                ...state,
                ipadStock: state.ipadStock - 1,
                myIpads: state.myIpads + 1,
            };
        case CHECK_OUT:
            return { 
                ...state,
                ipadStock: initialState.ipadStock,
                myIpads: initialState.myIpads,
            };
            
        default:
            return state;
    }
}