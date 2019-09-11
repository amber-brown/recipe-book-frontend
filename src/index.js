import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";

class Index extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <App />
        </div>
      </Provider>
    );
  }
}

Index.propTypes = {
  store: PropTypes.object
};

ReactDOM.render(<Index store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
