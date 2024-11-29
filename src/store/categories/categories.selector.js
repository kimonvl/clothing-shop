import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategoriesArray = createSelector(
    [selectCategoriesReducer],
    // @ts-ignore
    (categoriesSlice) => categoriesSlice.categoriesArray
);

export const selectCategoriesMap = createSelector(
    [selectCategoriesArray],
    (categories) => {
        console.log("select categories ", categories);
        const map = categories.reduce((acc, category) => {
            acc[category.title.toLowerCase()] = category.items;
            return acc;
        }, {})
        
        return map;
    }
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)
