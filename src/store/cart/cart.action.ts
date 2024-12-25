import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from "../categories/categories.types";
import {CART_ACTION_TYPES, CartItem} from "./cart.types";

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export type SetIsVisible = ActionWithPayload<CART_ACTION_TYPES.SET_IS_VISIBLE, boolean>;

export type IncreaseQuantityOfItem = ActionWithPayload<CART_ACTION_TYPES.INCREASE_QUANTITY, number>;

export type DecreaseQuantityOfItem = ActionWithPayload<CART_ACTION_TYPES.DECREASE_QUANTITY, number>;

export type AddItemToCart = ActionWithPayload<CART_ACTION_TYPES.ADD_ITEM, CategoryItem>;

export type RemoveItemFromCart = ActionWithPayload<CART_ACTION_TYPES.REMOVE_ITEM, number>;

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
})

export const setIsVisible = withMatcher((value: boolean): SetIsVisible => {
    return createAction(CART_ACTION_TYPES.SET_IS_VISIBLE, value); 
})

export const increaseQuantityOfItem = withMatcher((itemId: number): IncreaseQuantityOfItem => {
    return createAction(CART_ACTION_TYPES.INCREASE_QUANTITY, itemId);
})

export const decreaseQuantityOfItem = withMatcher((itemId: number): DecreaseQuantityOfItem => {
    return createAction(CART_ACTION_TYPES.DECREASE_QUANTITY, itemId);
})


export const addItemToCart = withMatcher((item: CategoryItem): AddItemToCart => {
    return createAction(CART_ACTION_TYPES.ADD_ITEM, item);
})


export const removeItemFromCart = withMatcher((itemId: number): RemoveItemFromCart => {
    return createAction(CART_ACTION_TYPES.REMOVE_ITEM, itemId);
})