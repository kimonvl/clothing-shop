import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
    SET_CART_ITEMS = "cart/SET_CART_ITEMS",
    SET_IS_VISIBLE = "cart/SET_IS_VISIBLE",
    ADD_ITEM = "cart/ADD_ITEM",
    DECREASE_QUANTITY = "cart/DECREASE_QUANTITY",
    INCREASE_QUANTITY = "cart/INCREASE_QUANTITY", 
    REMOVE_ITEM = "cart/REMOVE_ITEM"
}

export type CartItem = CategoryItem & {
    quantity: number;
}
