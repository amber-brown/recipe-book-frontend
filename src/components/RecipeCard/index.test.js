import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Component from "./index.js";

const recipe = {
  title: "Key Lime Pie",
  time: { preparation: 30 },
  serves: 200,
  image: "/image.jpeg"
};

describe("RecipeCard", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Component recipe={recipe} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Component recipe={recipe} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
