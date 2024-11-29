import CATEGORIES_ACTION_TYPES from "./categories.types";
import { getCategoriesMap } from "../../utils/firebase/firebase.utils";

const fetchCategoriesStart = () => {
    return {type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START};
}

const fetchCategoriesSuccess = (categoriesArray) => {
    return {type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoriesArray};
}

const fetchCategoriesFailed = (error) => {
    return {type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, payload: error};
}

export const fetchCategoriesAsync = () => async (dispatch) => {

    dispatch(fetchCategoriesStart());
    try {
        const map = await getCategoriesMap();
        dispatch(fetchCategoriesSuccess(map));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
}