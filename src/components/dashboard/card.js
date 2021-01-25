import React from "react";
import PropTypes from "prop-types";
import "../../styles/dashboard/card.css";

const Card = ({ title, count }) => {
  const countColor =
    title === "Operational Equipments" ? "text-success" : "text-danger";

  return (
    <div className="container card-container">
      <h1 className={countColor}>{count}</h1>
      <h6>{title}</h6>
    </div>
  );
};

Card.prototype = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Card;
