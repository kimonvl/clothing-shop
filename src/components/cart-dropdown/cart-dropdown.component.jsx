import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const redirectToCheckout = () =>{
        navigate("/checkout")
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {
                cartItems.map((cartItem) =>{
                    return (
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                    );
                })
            }
            </div>
            <Button onClick={redirectToCheckout}>GO TO CHECKOUT</Button>
        </div>   
    );
}

export default CartDropdown