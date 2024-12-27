import CategoryItem from "../category-item/category-item.component";

import { CategoriesContainerDiv } from "./categories-container.styles";

export type CategoryObj = {
    id: number;
    title: string;
    imageUrl: string;
}

export type CategoriesContainerProps = {
    categories: CategoryObj[];
}

const CategoriesContainer = ({categories}: CategoriesContainerProps) =>{
    return (
        <CategoriesContainerDiv>
            {categories.map((category) =>{
                return (<CategoryItem key={category.id} category={category}/>);
            })} 
        </CategoriesContainerDiv>);
}

export default CategoriesContainer;