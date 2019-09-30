import React from "react";
import PropTypes from "prop-types";
import "./Method.scss";

export default class Method extends React.Component {
  render() {
    const { method } = this.props;

    return (
      <div className="info-method">
        {method.map((instruction, i) => (
          <div key={i}>
            <h3 className="method-number">Step {i + 1}</h3>
            <p> {instruction}</p>
          </div>
        ))}
      </div>
    );
  }
}

Method.propTypes = {
  method: PropTypes.array
};
