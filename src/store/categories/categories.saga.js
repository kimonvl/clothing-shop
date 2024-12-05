import { all, call, put, takeLatest } from "redux-saga/effects";
import CATEGORIES_ACTION_TYPES from "./categories.types";
import { getCategoriesMap } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./categories.action";

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesMap);
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* fetchCategoriesSaga() {
    yield all([call(onFetchCategories)]);
}