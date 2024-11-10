import { useNavigate } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryPreviewContainer, Title, Preview } from "./category-preview.styles";

const CategoryPreview = ({title, products}) => {
    const navigate = useNavigate();
    
    const redirectToCategory = () => {
        navigate(`/shop/${title}`);
    }

    return (
        <CategoryPreviewContainer>
            <h2>
                <Title onClick={redirectToCategory}>{title}</Title>
            </h2>
            <Preview>
               {
                products.filter((_, index) => index < 4).map((product, index) => {
                    return (
                        <ProductCard key={index} product={product}/>
                    );
                })
               }
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;