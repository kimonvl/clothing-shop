import { CarItemContainer, Name, ItemDetails } from "./cart-item.styles";

const CartItem = ({cartItem}) => {
    return (
        <CarItemContainer>
            <img src={`${cartItem.imageUrl}`} alt={`${cartItem.name}`} />
            <ItemDetails>
                <Name>{cartItem.name}</Name>
                <span className="price">{cartItem.quantity} x {`${cartItem.price}`}</span>
            </ItemDetails>
        </CarItemContainer>
    );
}

export default CartItem;