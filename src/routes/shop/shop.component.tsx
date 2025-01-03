import {Routes, Route} from 'react-router-dom';

import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../../store/categories/categories.action';

const Shop = () =>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<Category />}></Route>
        </Routes>        
    );
}

export default Shop;