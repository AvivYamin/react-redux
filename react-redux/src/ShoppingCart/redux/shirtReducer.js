import { ADD_SHIRT_TO_CART } from "./shoppingActionTypes";
const data = require("../data/products.json")

const initialState = {
    shirtStock: data[1].stock,
    shirtPrice: data[1].price,
    shirtTitle: data[1].item,
    myShirts: 0,
}

export const shirtReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHIRT_TO_CART:
            return { 
                ...state,
                shirtStock: state.shirtStock - 1,
                myShirts: state.myShirts + 1,
            };
            
        default:
            return state;
    }
}