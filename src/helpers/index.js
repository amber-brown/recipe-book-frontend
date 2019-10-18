export const combineIngredients = recipes => {
  const ingredients = Object.values(recipes)
    .map(recipe => {
      let recipeQuantity = recipe.count;
      return recipe.ingredients.map(ingredient => ({
        ...ingredient,
        quantity: ingredient.quantity * recipeQuantity
      }));
    })
    .reduce((acc, val) => acc.concat(val), [])
    .reduce((acc, val) => {
      return acc[val.name]
        ? {
            ...acc,
            [val.name]: {
              ...acc[val.name],
              quantity: acc[val.name].quantity + val.quantity
            }
          }
        : { ...acc, [val.name]: val };
    }, {});

  return Object.values(ingredients);
};

export const convertUnits = ingredient => {
  const { quantity, unit } = ingredient;
  const units = {
    g: "kg",
    ml: "l"
  };

  return quantity >= 1000 && Object.keys(units).includes(unit)
    ? { ...ingredient, quantity: quantity / 1000, unit: units[unit] }
    : ingredient;
};
