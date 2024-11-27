import { useContext } from "react"; 
import { CheckoutItemContainer, ImageContainer, Name, Quantity, Arrow, Value, Price, RemoveButton } from "./checkout-item.styles";
import { useDispatch } from "react-redux";
import { decreaseQuantityOfItem, increaseQuantityOfItem, removeItemFromCart } from "../../store/cart/cart.action";
import React from "react";

 const CheckoutItem = ({item}) => {
    const {name, imageUrl, price, quantity} = item;
    const dispatch = useDispatch();

    const decreaseQuantity = () =>{
        dispatch(decreaseQuantityOfItem(item.id));
    }

    const increaseQuantity = () =>{
        dispatch(increaseQuantityOfItem(item.id));
    }

    const removeItem = () =>{
        dispatch(removeItemFromCart(item.id));
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