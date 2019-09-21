export const getAllRecipes = () => ({
  type: "GET_ALL_RECIPES"
});

export const getAllRecipesSuccess = recipes => ({
  type: "GET_ALL_RECIPES_SUCCESS",
  recipes: recipes
});

export const getAllRecipesFailure = () => ({
  type: "GET_ALL_RECIPES_FAILURE"
});
