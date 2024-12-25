import { AnyAction } from "redux";
import { CartItem } from "./cart.types";
import { setCartItems, setIsVisible } from "./cart.action";

export type CartState = {
    cartItems: CartItem[];
    isVisible: boolean;
}

export const CART_INITIAL_STATE: CartState = {
    cartItems: [],
    isVisible: false
}

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {

    if(setCartItems.match(action)){
        return {...state, cartItems: action.payload};
    }

    if(setIsVisible.match(action)){
        return {...state, isVisible: action.payload};
    }

    return state;
}