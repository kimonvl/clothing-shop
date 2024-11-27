import { useContext } from "react";
import {ShoppingBagIcon, CartIconContainer, ItemCount} from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartVisible } from "../../store/cart/cart.selector.js";
import { setIsVisible } from "../../store/cart/cart.action.js";
import React from "react";

const CartIcon = () => {
    const isVisible = useSelector(selectIsCartVisible);
    const dispatch = useDispatch();
    const cartItemCount = useSelector(selectCartCount);

    const toggleDropdown = () => {
        if(isVisible)
            dispatch(setIsVisible(false));
        else
            dispatch(setIsVisible(true));
    }

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingBagIcon className="shopping-icon"/>
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;