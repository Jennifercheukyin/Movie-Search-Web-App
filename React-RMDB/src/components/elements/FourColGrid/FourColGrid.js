import React from "react";
import "./FourColGrid.css";
import PropTypes from "prop-types";

//destructuring properties
const FourColGrid = ({ header, loading, children }) => {
  const renderElement = () => {
    const gridElements = children.map((element, i) => {
      return (
        <div key={i} className="rmdb-grid-element">
          {element}
        </div>
      );
    });
    return gridElements;
  };
  return (
    <div className="rmdb-grid">
      {header && !loading ? <h1>{header}</h1> : null}
      <div className="rmdb-grid-content">{renderElement()}</div>
    </div>
  );
};

FourColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
};
export default FourColGrid;
