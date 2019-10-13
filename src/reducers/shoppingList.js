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
    default:
      return state;
  }
};

export default shoppingList;
