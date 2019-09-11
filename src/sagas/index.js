import { takeLatest } from "redux-saga/effects";
import { getAllRecipes } from "./recipes";

function* rootSaga() {
  yield takeLatest("GET_ALL_RECIPES", getAllRecipes);
}

export default rootSaga;
