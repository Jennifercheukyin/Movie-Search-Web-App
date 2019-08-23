import React from "react";
import "./LoadMoreBtn.css";
import PropTypes from "prop-types";

const LoadMoreBtn = ({ text, onClick }) => {
  return (
    <div className="rmdb-loadmorebtn" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};
LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default LoadMoreBtn;
