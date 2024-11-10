import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
 
import { CheckoutItemContainer, ImageContainer, Name, Quantity, Arrow, Value, Price, RemoveButton } from "./checkout-item.styles";

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
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={decreaseQuantity}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={increaseQuantity}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
 }

 export default CheckoutItem;