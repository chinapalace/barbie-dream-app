import React from "react";

const SwatchList = props => {
  return (
    <ul className="swatch-list">
      {props.swatches.map(swatch => (
        <li style={{ backgroundColor: swatch.color }} />
      ))}
    </ul>
  );
};

export default SwatchList;
