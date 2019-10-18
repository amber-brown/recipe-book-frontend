import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteRecipeFromShoppingList } from "../../actions";
import { combineIngredients, convertUnits } from "../../helpers";

import "./ShoppingList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showShoppingList: false
    };
  }

  render() {
    const { showShoppingList } = this.state;
    const { recipes } = this.props;

    return (
      <div className="shopping-list">
        <button
          className="view-shopping-list"
          onClick={() => this.setState({ showShoppingList: !showShoppingList })}
        >
          <FontAwesomeIcon icon={faListAlt} className="icon" />
        </button>
        {showShoppingList ? (
          <div className="shopping-list-popup">
            <h2>Shopping List</h2>
            <div className="shopping-items-container">
              {Object.values(recipes).length ? (
                <React.Fragment>
                  <h4>Recipes Included:</h4>
                  <ul className="shopping-items-recipes">
                    {Object.values(recipes).map((recipe, i) => (
                      <li key={i} className="shopping-items-recipe">
                        <span className="shopping-items-recipe__count">
                          {`${recipe.count} x`}
                        </span>
                        <Link
                          to={`/recipe/${recipe._id}`}
                          className="shopping-items-recipe__title"
                        >
                          <span>{recipe.title}</span>
                        </Link>
                        <span className="shopping-items-recipe__delete">
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            onClick={() =>
                              this.props.deleteRecipeFromShoppingList(
                                recipe._id
                              )
                            }
                            className="icon"
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                  <h4>Ingredients:</h4>
                  <ul className="shopping-items">
                    {combineIngredients(recipes)
                      .map(convertUnits)
                      .map((ingredient, i) => (
                        <li key={i} className="shopping-item">
                          <span className="shopping-item__quantity">
                            {ingredient.quantity}
                          </span>
                          <span className="shopping-item__unit">
                            {ingredient.unit}{" "}
                          </span>
                          <span className="shopping-item__name">
                            {ingredient.name}
                          </span>
                        </li>
                      ))}
                  </ul>
                </React.Fragment>
              ) : (
                <p>There are no items in the shopping list</p>
              )}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

ShoppingList.propTypes = {
  recipes: PropTypes.object,
  deleteRecipeFromShoppingList: PropTypes.func
};

/*
mapStateToProps - given the state of the store, can pull out data from
the store and give it as props to your component.
*/
const mapStateToProps = state => ({
  recipes: state.shoppingList
});

/*
mapDispatchToProps provides access to the dispatcher for sending actions
through Redux.
*/
const mapDispatchToProps = dispatch => ({
  deleteRecipeFromShoppingList: id => dispatch(deleteRecipeFromShoppingList(id))
});

/*
connect() runs the above function and gives the result to App -
It connects the app to the store.
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);

export { ShoppingList };
