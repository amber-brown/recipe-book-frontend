const shoppingList = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_SHOPPING_LIST": {
      if (state[action.recipe._id]) {
        return {
          ...state,
          [action.recipe._id]: {
            ...state[action.recipe._id],
            count: state[action.recipe._id].count + 1
          }
        };
      } else {
        return {
          ...state,
          [action.recipe._id]: { ...action.recipe, count: 1 }
        };
      }
    }
    case "DELETE_RECIPE_FROM_SHOPPING_LIST": {
      if (state[action.id] && state[action.id].count > 1) {
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            count: state[action.id].count - 1
          }
        };
      } else {
        return Object.entries(state).reduce((acc, [key, value]) => {
          if (key === action.id) return acc;
          return { ...acc, [key]: value };
        }, {});
      }
    }
    default:
      return state;
  }
};

export default shoppingList;
