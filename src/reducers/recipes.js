const recipes = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_RECIPES_SUCCESS":
      return action.recipes;
    case "GET_RECIPE_SUCCESS": {
      const existingRecipe = state.find(
        element => element._id === action.recipe._id
      );

      if (existingRecipe) {
        return state.map(recipe =>
          recipe._id === action.recipe._id ? action.recipe : recipe
        );
      } else {
        //don't put arr.push() as this will mutate the array
        //and reducers need to be pure functions.
        return [...state, action.recipe];
      }
    }
    case "ADD_TO_SHOPPING_LIST": {

    }
    default:
      return state;
  }
};

export default recipes;
