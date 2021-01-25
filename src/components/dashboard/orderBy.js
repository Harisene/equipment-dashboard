import React from "react";
import PropTypes from "prop-types";

const OrderBy = ({ orderBy, onOrderBy }) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button disabled type="button" className="btn btn-outline-secondary">
        Order by
      </button>
      <button
        type="button"
        className={
          orderBy === "type" ? "btn btn-primary" : "btn btn-outline-primary"
        }
        onClick={() => onOrderBy("type")}
      >
        Equip Type
      </button>
      <button
        type="button"
        className={
          orderBy !== "type" ? "btn btn-primary" : "btn btn-outline-primary"
        }
        onClick={() => onOrderBy("operations")}
      >
        Operations
      </button>
    </div>
  );
};

OrderBy.prototype = {
  orderBy: PropTypes.string.isRequired,
  onOrderBy: PropTypes.func.isRequired,
};

export default OrderBy;
