
import { ADD_IPAD_TO_CART, ADD_SHIRT_TO_CART, ADD_CD_TO_CART, CHECK_OUT, ADD_TO_CART } from "./shoppingActionTypes"

export const addIpadToCart = () => {
    return {
        type: ADD_IPAD_TO_CART
    }
}

export const addShirtToCart = () => {
    return {
        type: ADD_SHIRT_TO_CART
    }
}

export const addCdToCart = () => {
    return {
        type: ADD_CD_TO_CART
    }
}

export const addToCart = (price) => {
    return{
        type: ADD_TO_CART,
        payload: price
    }
}

export const checkOut = () => {
    return{
        type: CHECK_OUT,
        message: "Thank You For Shopping =]"
    }
}

