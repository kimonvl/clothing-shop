import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryTitle, CategoryContainer } from "./category.styles";
import React from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    
    // @ts-ignore
    const [products, setProducts] = useState(categoriesMap[category.toUpperCase()]);

    useEffect(() => {
        // @ts-ignore
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])


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