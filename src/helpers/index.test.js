import { combineIngredients, convertUnits } from "./index.js";

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
  describe("#convertUnits", () => {
    it("should convert to the most appropriate unit", () => {
      const ingredient1 = {
        unit: "g",
        quantity: 100
      };
      const ingredient2 = {
        unit: "g",
        quantity: 1200
      };
      const ingredient3 = {
        unit: "ml",
        quantity: 100
      };
      const ingredient4 = {
        unit: "ml",
        quantity: 1300
      };
      expect(convertUnits(ingredient1)).toEqual(ingredient1);
      expect(convertUnits(ingredient2)).toEqual({
        unit: "kg",
        quantity: 1.2
      });
      expect(convertUnits(ingredient3)).toEqual(ingredient3);
      expect(convertUnits(ingredient4)).toEqual({
        unit: "l",
        quantity: 1.3
      });
    });
    it("should return the ingredient if the unit cannot be converted", () => {
      const ingredient5 = {
        unit: "cups",
        quantity: 13
      };
      const ingredient6 = {
        unit: "cups",
        quantity: 1300000
      };
      expect(convertUnits(ingredient5)).toEqual(ingredient5);
      expect(convertUnits(ingredient6)).toEqual(ingredient6);
    });
  });
});
