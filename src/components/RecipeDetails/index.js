import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faUserFriends,
  faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";

import "./RecipeDetails.scss";
import Ingredients from "../Ingredients";
import Method from "../Method";

export default class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openTab: "INGREDIENTS",
      mediaQuery: window.matchMedia("(min-width: 1024px)")
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    this.setState({ mediaQuery });
  };

  renderDetails = () => {
    const { recipe } = this.props;
    const { openTab, mediaQuery } = this.state;

    if (mediaQuery.matches) {
      return (
        <div>
          <h2 className="details-title">Ingredients</h2>
          <Ingredients ingredients={recipe.ingredients} />
          <h2 className="details-title">Method</h2>
          <Method method={recipe.method} />
        </div>
      );
    } else if (openTab === "INGREDIENTS") {
      return <Ingredients ingredients={recipe.ingredients} />;
    } else if (openTab === "METHOD") {
      return <Method method={recipe.method} />;
    }
  };

  render() {
    const { recipe } = this.props;
    const ingredientsClasses = classNames("tab", {
      active: this.state.openTab === "INGREDIENTS"
    });
    const methodClasses = classNames("tab", {
      active: this.state.openTab === "METHOD"
    });
    return (
      <div className="recipeDetails">
        <div
          className="recipe-intro"
          style={{ backgroundImage: `url(${recipe.image})` }}
        >
          <Link to="/">
            <div className="btn-back">
              <FontAwesomeIcon icon={faArrowCircleLeft} className="icon" />
            </div>
          </Link>
          <div className="intro-banner">
            <h2 className="recipe-title">{recipe.title}</h2>
            <div className="servings-minutes">
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
        <div className="recipe-details">
          <div className="tabs">
            <h4
              className={ingredientsClasses}
              onClick={() => this.setState({ openTab: "INGREDIENTS" })}
            >
              Ingredients
            </h4>
            <h4
              className={methodClasses}
              onClick={() => this.setState({ openTab: "METHOD" })}
            >
              Method
            </h4>
          </div>
          <div className="details">{this.renderDetails()}</div>
        </div>
      </div>
    );
  }
}

RecipeDetails.propTypes = {
  recipe: PropTypes.object
};
