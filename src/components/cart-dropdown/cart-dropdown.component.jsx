import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const {isVisible} = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-item"/>
            <Button >GO TO CHECKOUT</Button>
        </div>   
    );
}

export default CartDropdown