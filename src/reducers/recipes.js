const recipes = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_RECIPES_SUCCESS":
      return action.recipes;

    default:
      return state;
  }
};

export default recipes;
