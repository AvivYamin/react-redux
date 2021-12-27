import { ADD_SHIRT_TO_CART } from "./shoppingActionTypes";
import store from "./store";
const data = require("../data/products.json")

const initialState = {
    shirtStock: data[1].stock,
    shirtPrice: data[1].price,
    shirtTitle: data[1].item,
    myShirts: 0,
}

export const shirtReducer = (state = initialState, action, root) => {
    switch (action.type) {
        case ADD_SHIRT_TO_CART:
            // let total = store.getState().cart.total;
            return { 
                ...state,
                shirtStock: state.shirtStock - 1,
                myShirts: state.myShirts + 1,
                total: root.total + 1
            };
            
        default:
            return state;
    }
}