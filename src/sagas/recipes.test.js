import { call, put } from "redux-saga/effects";
import { getAllRecipesSuccess, getAllRecipesFailure } from "../actions";
import { getAllRecipes } from "./recipes";

describe("getAllRecipes", () => {
  it("should get the recipes from the API", () => {
    const apiResponse = [{ title: "Recipes Title" }];
    const iterator = getAllRecipes();
    const callFetch = iterator.next().value;
    const res = {
      json: () => apiResponse
    };
    const callJSON = iterator.next(res).value;
    const putGetAllRecipesSuccess = iterator.next(apiResponse).value;

    expect(callFetch).toEqual(call(fetch, "http://localhost:4000/recipes"));
    expect(callJSON).toEqual(call([res, "json"]));
    expect(putGetAllRecipesSuccess).toEqual(
      put(getAllRecipesSuccess(apiResponse))
    );
  });

  it("handles errors", () => {
    const mockError = new Error("an error occurred");
    const iterator = getAllRecipes();
    iterator.next();
    const putGetAllRecipesFailure = iterator.throw(mockError).value;

    expect(putGetAllRecipesFailure).toEqual(put(getAllRecipesFailure()));
  });
});
