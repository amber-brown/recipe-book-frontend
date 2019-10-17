import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./RecipeList.scss";

import RecipeCard from "../RecipeCard";
import { getAllRecipes } from "../../actions";

class RecipeList extends React.Component {
  componentDidMount() {
    this.props.getAllRecipes();
  }
  render() {
    const { recipes } = this.props;
    if (!recipes) {
      return <p>Loading</p>;
    }
    return (
      <div className="recipe-list">
        <h2>Recipes</h2>
        <div className="list">
          {recipes.map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
  getAllRecipes: PropTypes.func
};

/*
mapStateToProps - given the state of the store, can pull out data from
the store and give it as props to your component.
*/
const mapStateToProps = state => ({
  recipes: state.recipes
});

/*
mapDispatchToProps provides access to the dispatcher for sending actions
through Redux.
*/
const mapDispatchToProps = dispatch => ({
  getAllRecipes: () => dispatch(getAllRecipes())
});

/*
connect() runs the above function and gives the result to App -
It coonects the app to the store.
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeList);

export { RecipeList };
