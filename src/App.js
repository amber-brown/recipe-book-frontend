import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import "normalize.css";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { getAllRecipes } from "./actions";

class App extends React.Component {
  componentDidMount() {
    this.props.getAllRecipes();
  }

  render() {
    const { recipes } = this.props;

    return (
      <Router>
        <div className="App">
          <Route
            exact={true}
            path="/"
            render={() => <RecipeList recipes={recipes} />}
          />
          {recipes.length && (
            <Route
              path="/recipe/:recipeId"
              render={({ match }) => (
                <RecipeDetails
                  recipe={recipes.find(i => i._id === match.params.recipeId)}
                />
              )}
            />
          )}
        </div>
      </Router>
    );
  }
}

App.propTypes = {
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
)(App);
