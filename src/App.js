import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.scss";

import RecipeList from "./components/RecipeList";
import { getAllRecipes } from "./actions";

class App extends React.Component {
  componentDidMount() {
    this.props.getAllRecipes();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <RecipeList recipes={this.props.recipes} />
      </div>
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
