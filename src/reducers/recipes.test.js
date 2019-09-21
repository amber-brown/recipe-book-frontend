import reducer from "./recipes";
import { getAllRecipesSuccess } from "../actions/index.js";

describe("recipes reducer", () => {
  it("should handle GET_ALL_RECIPES_SUCCESS with an empty initial state", () => {
    const recipes = [{ title: "Recipe Title" }, { title: "Recipe Title 2" }];

    expect(reducer([], getAllRecipesSuccess(recipes))).toEqual(recipes);
  });

  it("should handle GET_ALL_RECIPES_SUCCESS with existing state", () => {
    const recipes = [{ title: "Recipe Title" }, { title: "Recipe Title 2" }];

    expect(
      reducer([{ title: "Initial Recipe" }], getAllRecipesSuccess(recipes))
    ).toEqual(recipes);
  });
});
