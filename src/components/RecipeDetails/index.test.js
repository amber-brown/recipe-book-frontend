import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { RecipeDetails } from "./index.js";
import { BrowserRouter as Router } from "react-router-dom";

const recipe = {
  title: "Key Lime Pie",
  time: { preparation: 30 },
  serves: 200,
  image: "/image.jpeg",
  method: ["This is the first instruction", "this is the second"],
  ingredients: [
    {
      unit: "handful",
      quantity: 1,
      name: "flaked almonds"
    },
    {
      unit: "tbsp",
      quantity: 1,
      name: "Ghee"
    }
  ]
};

describe("RecipeDetails", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <RecipeDetails recipe={recipe} getRecipe={() => {}} />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <RecipeDetails recipe={recipe} getRecipe={() => {}} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
