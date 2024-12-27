import { CarItemContainer, Name, ItemDetails } from "./cart-item.styles";
import {CartItem as CartItemType} from "../../store/cart/cart.types";
export type CartItemPorps = {
    cartItem: CartItemType
}

const CartItem = ({cartItem}: CartItemPorps) => {
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