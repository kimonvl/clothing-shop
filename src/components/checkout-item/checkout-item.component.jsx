import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
 
import "./checkout-item.styles.scss";
 const CheckoutItem = ({item}) => {
    const {name, imageUrl, price, quantity} = item;
    const { decreaseQuantityOfCartItem, removeCartItem, increaseQuantityOfCartItem} = useContext(CartContext);

    const decreaseQuantity = () =>{
        decreaseQuantityOfCartItem(item.id);
    }

    const increaseQuantity = () =>{
        increaseQuantityOfCartItem(item.id);
    }

    const removeItem = () =>{
        removeCartItem(item.id);
    }
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={decreaseQuantity} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={increaseQuantity} className="arrow">&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick={removeItem} className="remove-button">&#10005;</div>
        </div>
    );
 }

 export default CheckoutItem;