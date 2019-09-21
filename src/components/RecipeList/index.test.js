import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Component from "./index.js";

const recipes = [
  {
    title: "Key Lime Pie",
    time: { preparation: 30 },
    serves: 200,
    image: "/image.jpeg"
  },
  {
    title: "Fish and Chips",
    time: { preparation: 50 },
    serves: 60,
    image: "/image.jpeg"
  }
];

describe("RecipeList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Component recipes={recipes} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Component recipes={recipes} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
