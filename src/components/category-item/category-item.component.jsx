import { useNavigate } from 'react-router-dom';

import {BackgroundImage, CategoryItemBodyContainer, CategoryItemContainer} from './category-item.styles';
import React from 'react';

const CategoryItem = ({category:{title, imageUrl}}) => {
    const navigate = useNavigate();
    
    const redirectToCategory = () => {
        navigate(`/shop/${title}`);
    }

    return (
        <CategoryItemContainer>
            <BackgroundImage 
// @ts-ignore
            imageurl={imageUrl} />
            <CategoryItemBodyContainer onClick={redirectToCategory}>
                <h2>{title}</h2>
                <p>Shop now</p>
            </CategoryItemBodyContainer>
        </CategoryItemContainer>);
}

export default CategoryItem;