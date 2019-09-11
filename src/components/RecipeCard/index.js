import React from "react";
import "./RecipeCard.scss";

export default class RecipeCard extends React.Component {
  render() {
    const { recipe } = this.props;
    console.log(recipe);
    return (
      <div
        className="recipe-card"
        style={{ backgroundImage: `url(${recipe.image})` }}
      >
        <div className="information">
          <h2>{recipe.name}</h2>
          <div className="sub-information">
            <p>{recipe.preparation_time} minutes</p>
            <p>Servings: {recipe.servings}</p>
          </div>
        </div>
      </div>
    );
  }
}
