import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.component";


import "./cart-icon.styles.scss";

const CartIcon = () => {
    const {isVisible, setIsVisible} = useContext(CartContext);

    const toggleDropdown = () => {
        if(isVisible)
            setIsVisible(false);
        else
            setIsVisible(true);
    }

    return (
        <div onClick={toggleDropdown} className="cart-icon-container">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
}

export default CartIcon;