import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
                <ul className="shopping-items">
                  {Object.values(recipes).map((recipe, i) => (
                    <li key={i}>
                      <span>{recipe.count}</span>
                      <Link to={`/recipe/${recipe._id}`}>
                        <span>{recipe.title}</span>
                      </Link>
                      <span>
                        <FontAwesomeIcon icon={faTrashAlt} className="icon" />
                      </span>
                    </li>
                  ))}
                </ul>
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
  recipes: PropTypes.object
};

/*
mapStateToProps - given the state of the store, can pull out data from
the store and give it as props to your component.
*/
const mapStateToProps = state => ({
  recipes: state.shoppingList
});

/*
connect() runs the above function and gives the result to App -
It connects the app to the store.
*/
export default connect(mapStateToProps)(ShoppingList);

export { ShoppingList };
