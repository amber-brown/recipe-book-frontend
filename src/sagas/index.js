import { takeLatest } from "redux-saga/effects";
import { getAllRecipes, getRecipe } from "./recipes";

function* rootSaga() {
  yield takeLatest("GET_ALL_RECIPES", getAllRecipes);
  yield takeLatest("GET_RECIPE", getRecipe);
}

export default rootSaga;
