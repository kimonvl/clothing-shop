import React from "react";
import CategoryItem from "../category-item/category-item.component";

import { CategoriesContainerDiv } from "./categories-container.styles";

const CategoriesContainer = ({categories}) =>{
    return (
        <CategoriesContainerDiv>
            {categories.map((category) =>{
                return (<CategoryItem key={category.id} category={category}/>);
            })} 
        </CategoriesContainerDiv>);
}

export default CategoriesContainer;