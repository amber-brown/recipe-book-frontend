import React from "react";
import { connect } from "react-redux";
import "./App.scss";

import RecipeCard from "./components/RecipeCard";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="recipe-list">
          <h2>Recipes</h2>
          {this.props.recipes.map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  }
}

/*
mapStateToProps - given the state of the store, can pull out data from
the store and give it as props to your component.
*/
const mapStateToProps = state => ({
  recipes: state.recipes
});

/*
connect() runs the above function and gives the result to App -
It coonects the app to the store.
*/
export default connect(mapStateToProps)(App);
