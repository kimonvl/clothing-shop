import CategoryItem from "../category-item/category-item.component.jsx";

import { CategoriesContainerDiv } from "./categories-container.styles.jsx";

const CategoriesContainer = ({categories}) =>{
    return (
        <CategoriesContainerDiv>
            {categories.map((category) =>{
                return (<CategoryItem key={category.id} category={category}/>);
            })} 
        </CategoriesContainerDiv>);
}

export default CategoriesContainer;