import { ADD_TO_CART, CHECK_OUT } from "./shoppingActionTypes";

const initialState = {
    total: 0,
    message: ""
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { 
                ...state,
                total: state.total + action.payload,
            };
        case CHECK_OUT:
            return { 
                ...state,
                total: initialState,
                message: action.message
            };
        default:
            return state;
    }
}
