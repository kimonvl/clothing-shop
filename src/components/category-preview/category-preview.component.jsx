import { useNavigate } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({title, products}) => {
    const navigate = useNavigate();
    
    const redirectToCategory = () => {
        navigate(`/shop/${title}`);
    }

    return (
        <div className="category-preview-container">
            <h2>
                <span onClick={redirectToCategory} className="title">{title}</span>
            </h2>
            <div className="preview">
               {
                products.filter((_, index) => index < 4).map((product, index) => {
                    return (
                        <ProductCard key={index} product={product}/>
                    );
                })
               }
            </div>
        </div>
    );
}

export default CategoryPreview;