import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import "normalize.css";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={RecipeList} />

          <Route
            path="/recipe/:recipeId"
            render={({ match }) => (
              <RecipeDetails recipeId={match.params.recipeId} />
            )}
          />
        </div>
      </Router>
    );
  }
}

App.propTypes = {};
