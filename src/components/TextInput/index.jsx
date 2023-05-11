import { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";

export class TextInput extends Component {
  render() {
    const { searchValue, handleChange } = this.props;
    return (
      <input
        className="text-input"
        onChange={handleChange}
        value={searchValue}
        type="search"
        placeholder="type your search"
      />
    );
  }
}

TextInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
