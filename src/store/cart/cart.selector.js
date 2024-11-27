import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

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