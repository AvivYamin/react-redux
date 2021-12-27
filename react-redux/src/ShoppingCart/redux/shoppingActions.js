
import { ADD_IPAD_TO_CART, ADD_SHIRT_TO_CART, ADD_CD_TO_CART, CHECK_OUT } from "./shoppingActionTypes"

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

export const checkOut = () => {
    return{
        type: CHECK_OUT
    }
}