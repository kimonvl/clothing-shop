import CART_ACTION_TYPES from "./cart.types"

export const setCartItems = (cartItems) => {
    return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: cartItems};
}

export const setIsVisible = (value) => {
    return {type: CART_ACTION_TYPES.SET_IS_VISIBLE, payload: value}; 
}

export const increaseQuantityOfItem = (itemId) => {
    return {type: CART_ACTION_TYPES.INCREASE_QUANTITY, payload: itemId};
}

export const decreaseQuantityOfItem = (itemId) => {
    return {type: CART_ACTION_TYPES.DECREASE_QUANTITY, payload: itemId};
}


export const addItemToCart = (item) => {
    return {type: CART_ACTION_TYPES.ADD_ITEM, payload: item};
}


export const removeItemFromCart = (itemId) => {
    return {type: CART_ACTION_TYPES.REMOVE_ITEM, payload: itemId};
}