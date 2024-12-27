import { useNavigate } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import { CategoryPreviewContainer, Title, Preview } from "./category-preview.styles";
import { CategoryItem } from "../../store/categories/categories.types";

export type CategoryPreviewProps = {
    title: string;
    products: CategoryItem[];
}

const CategoryPreview = ({title, products}: CategoryPreviewProps) => {
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