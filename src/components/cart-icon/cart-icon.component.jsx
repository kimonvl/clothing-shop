import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";


import {ShoppingBagIcon, CartIconContainer, ItemCount} from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const {isVisible, setIsVisible, cartItemCount} = useContext(CartContext);

    const toggleDropdown = () => {
        if(isVisible)
            setIsVisible(false);
        else
            setIsVisible(true);
    }

    return (
        <CartIconContainer onClick={toggleDropdown}>
            <ShoppingBagIcon className="shopping-icon"/>
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;