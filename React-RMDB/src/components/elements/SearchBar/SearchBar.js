import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "./SearchBar.css";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    value: ""
  };

  timeout = null;
  doSearch = event => {
    //destructuring prop
    const { callback } = this.props;

    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      callback(this.state.value);
    }, 500);
  };
  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            value={value}
          />
        </div>
      </div>
    );
  }
}
SearchBar.propTypes = {
  callback: PropTypes.func
};

export default SearchBar;
