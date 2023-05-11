import { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

export class Button extends Component {
  render() {
    const { text, modifyPosts, disabled } = this.props;
    return (
      <button onClick={modifyPosts} className="button" disabled={disabled}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  modifyPosts: PropTypes.func,
  disabled: PropTypes.bool
};
