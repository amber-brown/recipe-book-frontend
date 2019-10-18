import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import "./RecipeCard.scss";

export default class RecipeCard extends React.Component {
  render() {
    const { recipe } = this.props;

    return (
      <Link to={`/recipe/${recipe._id}`}>
        <div
          className="recipe-card"
          style={{ backgroundImage: `url(${recipe.image})` }}
        >
          <div className="information">
            <h2>{recipe.title}</h2>
            <div className="sub-information">
              <p>
                <FontAwesomeIcon icon={faStopwatch} className="icon" />
                {recipe.time.preparation} minutes
              </p>
              <p>
                <FontAwesomeIcon icon={faUserFriends} className="icon" />
                Serves: {recipe.serves}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

RecipeCard.propTypes = {
  recipe: PropTypes.object
};
