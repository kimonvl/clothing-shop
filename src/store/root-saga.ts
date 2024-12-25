import { all, call } from "typed-redux-saga/macro";
import { fetchCategoriesSaga } from "./categories/categories.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
    yield* all([call(fetchCategoriesSaga), call(userSagas)]);
}