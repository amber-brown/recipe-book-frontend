export const getAllRecipes = () => ({
  type: "GET_ALL_RECIPES"
});

export const getAllRecipesSuccess = recipes => ({
  type: "GET_ALL_RECIPES_SUCCESS",
  recipes
});

export const getAllRecipesFailure = () => ({
  type: "GET_ALL_RECIPES_FAILURE"
});

export const getRecipe = id => ({
  type: "GET_RECIPE",
  id
});

export const getRecipeSuccess = recipe => ({
  type: "GET_RECIPE_SUCCESS",
  recipe
});

export const getRecipeFailure = () => ({
  type: "GET_RECIPE_FAILURE"
});
