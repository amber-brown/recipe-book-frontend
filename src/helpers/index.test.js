import { combineIngredients } from "./index.js";

describe("helpers", () => {
  describe("#combineIngredients", () => {
    it("should add two ingredients together", () => {
      const ingredients1 = [
        { name: "a", quantity: 1 },
        { name: "b", quantity: 2 },
        { name: "c", quantity: 3 },
        { name: "d", quantity: 4 }
      ];
      const ingredients2 = [
        { name: "a", quantity: 5 },
        { name: "b", quantity: 6 },
        { name: "d", quantity: 7 },
        { name: "e", quantity: 8 }
      ];
      const recipes = {
        recipe1: { ingredients: ingredients1, count: 2 },
        recipe2: { ingredients: ingredients2, count: 1 }
      };

      expect(combineIngredients(recipes)).toEqual([
        { name: "a", quantity: 7 },
        { name: "b", quantity: 10 },
        { name: "c", quantity: 6 },
        { name: "d", quantity: 15 },
        { name: "e", quantity: 8 }
      ]);
    });
  });
});

//get a list of recipe ingredients
//check if the ingredient exists
// if yes, combine the totals
// else add to the ingredients list as new ingredient
