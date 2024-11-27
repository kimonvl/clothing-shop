import {Routes, Route} from 'react-router-dom';

import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import React, { useEffect } from 'react';
import { getCategoriesMap } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/categories.action';

const Shop = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
        const func = async () => {
            const map = await getCategoriesMap();
            dispatch(setCategories(map));
        }

        func();
    }, []);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=":category" element={<Category />}></Route>
        </Routes>        
    );
}

export default Shop;