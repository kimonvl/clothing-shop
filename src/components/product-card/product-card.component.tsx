import Button, {BUTTON_CLASSES} from "../button/button.component";

import { ProductCardContainer, Footer, Name, Price } from "./product-card.styles";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { CategoryItem } from "../../store/categories/categories.types";

export type ProductCardProps = {
    product: CategoryItem;
}

const ProductCard  = ({product}: ProductCardProps) =>{
    const {name, price, imageUrl} = product;
    
    const dispatch = useDispatch();
    
    const addProductToCart = () =>{
        dispatch(addItemToCart(product));
    }
    
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name >{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;