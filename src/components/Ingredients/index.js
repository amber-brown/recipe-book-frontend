import React from "react";
import PropTypes from "prop-types";
import "./Ingredients.scss";

import { convertUnits } from "../../helpers";

export default class Ingredients extends React.Component {
  render() {
    const { ingredients } = this.props;

    return (
      <div className="info-ingredients">
        <ul className="ingredients-list">
          {ingredients
            .map(convertUnits)
            .map(({ quantity, unit, name, preparation }, i) => (
              <li className="ingredient" key={i}>
                <span className="ingredient-measurement">
                  {quantity} {unit}{" "}
                </span>
                <span>
                  {name}
                  {preparation ? `, ${preparation}` : null}
                </span>
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
