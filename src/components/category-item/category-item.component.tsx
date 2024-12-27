import { useNavigate } from 'react-router-dom';

import { CategoryObj } from '../categories-container/categories-container.component';
import {BackgroundImage, CategoryItemBodyContainer, CategoryItemContainer} from './category-item.styles';

const CategoryItem = ({category}: {category: CategoryObj}) => {
    const navigate = useNavigate();
    const {title, imageUrl} = category;
    const redirectToCategory = () => {
        navigate(`/shop/${title}`);
    }

    return (
        <CategoryItemContainer>
            <BackgroundImage 
            imageurl={imageUrl} />
            <CategoryItemBodyContainer onClick={redirectToCategory}>
                <h2>{title}</h2>
                <p>Shop now</p>
            </CategoryItemBodyContainer>
        </CategoryItemContainer>);
}

export default CategoryItem;