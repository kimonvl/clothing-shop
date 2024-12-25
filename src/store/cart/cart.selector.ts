import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { RootState } from "../store";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectIsCartVisible = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.isVisible 
);

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems
);

export const selectCartTotal = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price,
        0,
    )
)

export const selectCartCount = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0,
    )
)