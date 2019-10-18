import { combineReducers } from "redux";
import recipes from "./recipes";
import shoppingList from "./shoppingList";

export default combineReducers({
  recipes,
  shoppingList
});
