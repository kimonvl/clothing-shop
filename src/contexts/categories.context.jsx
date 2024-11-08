import { createContext, useState, useEffect } from "react";

import { getCategoriesMap } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const func = async () => {
            const map = await getCategoriesMap();
            setCategoriesMap(map)
        }

        func();
    }, []);

    const value = {categoriesMap};
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>);
}