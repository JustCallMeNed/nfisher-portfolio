import React from "react";

const PortfolioItem = ({ linkAddress, projectDesc, projectName }) => {
  return (
    <div>
      <div className="portList">
        <h2>
          <a href={linkAddress}>{projectName}</a>
        </h2>
        <h4>{projectDesc}</h4>
      </div>
    </div>
  );
};
export default PortfolioItem;
