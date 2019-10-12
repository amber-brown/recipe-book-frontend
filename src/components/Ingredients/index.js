import React from "react";
import PropTypes from "prop-types";
import "./Ingredients.scss";

export default class Ingredients extends React.Component {
  render() {
    const { ingredients } = this.props;

    return (
      <div className="info-ingredients">
        <ul className="ingredients-list">
          {ingredients.map((ingredient, i) => (
            <li className="ingredient" key={i}>
              <span className="ingredient-measurement">{`${ingredient.quantity}${ingredient.unit} `}</span>
              <span>{ingredient.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Ingredients.propTypes = {
  ingredients: PropTypes.array
};
