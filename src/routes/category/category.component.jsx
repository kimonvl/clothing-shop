import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryTitle, CategoryContainer } from "./category.styles";
const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category.toUpperCase()]);

    const cat = (category.charAt(0).toUpperCase() + String(category).slice(1));
    useEffect(() => {
        setProducts(categoriesMap[cat]);
    }, [category, categoriesMap])

    console.log(categoriesMap[cat]);

    return (
        <Fragment>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryContainer>
                {
                    products && products.map((product) => {return (<ProductCard key={product.id} product={product}/>)})
                }
            </CategoryContainer>
        </Fragment>
        
    );
}

export default Category;