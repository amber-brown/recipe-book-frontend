import React from "react";
import PropTypes from "prop-types";
import "./RecipeList.scss";

import RecipeCard from "../RecipeCard";

class RecipeList extends React.Component {
  render() {
    return (
      <div className="recipe-list">
        <h2>Recipes</h2>
        <div className="list">
          {this.props.recipes.map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object)
};

export default RecipeList;
