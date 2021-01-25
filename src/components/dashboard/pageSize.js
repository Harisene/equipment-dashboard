import React from "react";
import PropTypes from "prop-types";

const PageSize = ({ pageSize, onPageSizeChange }) => {
  return (
    <div className="d-flex">
      <button disabled type="button" className="btn btn-outline-secondary">
        Page size
      </button>
      <select
        className="form-control col mr-3"
        id="exampleFormControlSelect1"
        name="pagesize"
        value={pageSize}
        onChange={onPageSizeChange}
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
      </select>
    </div>
  );
};

PageSize.prototype = {
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};

export default PageSize;
