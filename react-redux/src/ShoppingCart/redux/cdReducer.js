import { ADD_CD_TO_CART } from "./shoppingActionTypes";
import store from "./store";
const data = require("../data/products.json")

const initialState = {
    cdStock: data[2].stock,
    cdPrice: data[2].price,
    cdTitle: data[2].item,
    myCds: 0,
    // total: store.getState().total
}

export const cdReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CD_TO_CART:
            console.log("Hey")
            return { 
                ...state,
                cdStock: state.cdStock - 1,
                myCds: state.myCds + 1,
                // total: state.total + state.cdPrice
            };
            
        default:
            return state;
    }
}