import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.component";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () =>{
    const {products} = useContext(ProductsContext);
    return (
        <div className="products-conainer">
            {products.map((product) =>{
                return (<ProductCard product={product} key={product.id}/>);
            })}
        </div>
    );
}

export default Shop;