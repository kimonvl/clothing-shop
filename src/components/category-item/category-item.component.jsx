import { useNavigate
    
 } from 'react-router-dom';
import './category-item.styles.scss';

const CategoryItem = ({category:{title, imageUrl}}) => {
    const navigate = useNavigate();
    
    const redirectToCategory = () => {
        navigate(`/shop/${title}`);
    }

    return (
        <div className="category-item-container">
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div onClick={redirectToCategory} className="category-item-body-container">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </div>);
}

export default CategoryItem;