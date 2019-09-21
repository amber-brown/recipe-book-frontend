import { call, put } from "redux-saga/effects";
import { getAllRecipesSuccess, getAllRecipesFailure } from "../actions";

export const getAllRecipes = function* getAllRecipes() {
  try {
    const res = yield call(fetch, "http://localhost:4000/recipes");
    const data = yield call([res, "json"]);

    yield put(getAllRecipesSuccess(data));
  } catch (e) {
    yield put(getAllRecipesFailure());
  }
};
