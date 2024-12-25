import { createSelector } from "reselect";
import {CategoriesState} from "./categories.reducer"
import { CategoriesMap } from "./categories.types";
import { RootState } from "../store";

const selectCategoriesReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategoriesArray = createSelector(
    [selectCategoriesReducer],
    // @ts-ignore
    (categoriesSlice) => categoriesSlice.categoriesArray
);

export const selectCategoriesMap = createSelector(
    [selectCategoriesArray],
    (categories): CategoriesMap => {
        console.log("select categories ", categories);
        const map = categories.reduce((acc, category) => {
            acc[category.title.toLowerCase()] = category.items;
            return acc;
        }, {} as CategoriesMap)
        
        return map;
    }
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
