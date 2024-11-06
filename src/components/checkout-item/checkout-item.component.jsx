import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
 
 const CheckoutItem = ({item}) => {

    const { decreaseQuantityOfCartItem, removeCartItem} = useContext(CartContext);

    const decreaseQuantity = () =>{
        console.log("decrease click", item);
        decreaseQuantityOfCartItem(item.id);
    }

    const removeItem = () =>{
        console.log("remove click", item);
        removeCartItem(item.id);
    }
    return (
        <div >
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <button onClick={decreaseQuantity}>-</button>
            <button onClick={removeItem}>x</button>
        </div>
    );
 }

 export default CheckoutItem;