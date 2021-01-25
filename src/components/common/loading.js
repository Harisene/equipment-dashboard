import React from "react";
import "../../styles/common/loading.css";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <div className="spinner-border" role="status"></div>
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;
