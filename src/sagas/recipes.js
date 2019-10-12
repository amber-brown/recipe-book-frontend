import { call, put } from "redux-saga/effects";
import {
  getAllRecipesSuccess,
  getAllRecipesFailure,
  getRecipeSuccess,
  getRecipeFailure
} from "../actions";

export const getAllRecipes = function* getAllRecipes() {
  try {
    const res = yield call(fetch, "http://localhost:4000/recipes");
    const data = yield call([res, "json"]);

    yield put(getAllRecipesSuccess(data));
  } catch (e) {
    yield put(getAllRecipesFailure());
  }
};

export const getRecipe = function* getRecipe(action) {
  try {
    const res = yield call(fetch, `http://localhost:4000/recipes/${action.id}`);
    const data = yield call([res, "json"]);

    yield put(getRecipeSuccess(data));
  } catch (e) {
    yield put(getRecipeFailure());
  }
};
