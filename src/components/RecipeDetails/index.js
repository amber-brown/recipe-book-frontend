import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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

import { getRecipe, addToShoppingList } from "../../actions";

class RecipeDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openTab: "INGREDIENTS",
      mediaQuery: this.matchMediaExists()
        ? window.matchMedia("(min-width: 1024px)")
        : {},
      addedAnimation: false
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.props.getRecipe(this.props.recipeId);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    if (this.matchMediaExists()) {
      const mediaQuery = window.matchMedia("(min-width: 1024px)");
      this.setState({ mediaQuery });
    }
  };

  addedItemToShoppingList = () => {
    if (!this.state.addedAnimation) {
      this.setState({ addedAnimation: true });
      setTimeout(() => this.setState({ addedAnimation: false }), 300);
    }
  };

  matchMediaExists = () => {
    return window && window.matchMedia;
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

    const addToShoppingListClasses = classNames("add-to-shopping-list", {
      "added-animation": this.state.addedAnimation
    });

    if (!recipe) {
      return <p>Loading</p>;
    }
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
            <button
              className={addToShoppingListClasses}
              onClick={() => {
                this.props.addToShoppingList(recipe);
                this.addedItemToShoppingList();
              }}
            >
              Add Recipe to Shopping List
            </button>
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
  recipe: PropTypes.object,
  getRecipe: PropTypes.func,
  addToShoppingList: PropTypes.func,
  recipeId: PropTypes.string
};

/*
mapStateToProps - given the state of the store, can pull out data from
the store and give it as props to your component.
*/
const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes.find(element => element._id === ownProps.recipeId)
});

/*
mapDispatchToProps provides access to the dispatcher for sending actions
through Redux.
*/
const mapDispatchToProps = dispatch => ({
  getRecipe: id => dispatch(getRecipe(id)),
  addToShoppingList: recipe => dispatch(addToShoppingList(recipe))
});

/*
connect() runs the above function and gives the result to App -
It coonects the app to the store.
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetails);

export { RecipeDetails };
