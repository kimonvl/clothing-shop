import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button , {BUTTON_CLASSES} from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const redirectToCheckout = () =>{
        navigate("/checkout")
    }
    return (
        <CartDropdownContainer>
            {
                cartItems.length ? (
                    <CartItems>
                        {
                            cartItems.map((cartItem) =>{
                                return (
                                    <CartItem key={cartItem.id} cartItem={cartItem}/>
                                );
                            })
                        }
                    </CartItems>
                ) : (<EmptyMessage>Your cart is empty</EmptyMessage>)
            }
            
            <Button buttonType={BUTTON_CLASSES.base} onClick={redirectToCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>   
    );
}

export default CartDropdown