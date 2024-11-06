import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";


const Checkout = () => {
    const {cartItems} = useContext(CartContext);
    console.log("checkout", cartItems);

    return (
        <div>
            {
                cartItems.map((item) => {
                    return (
                        <CheckoutItem key={item.id} item={item}/>
                    );
                })
            }
        </div>
    );
}

export default Checkout;