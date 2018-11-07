import React from "react";
import SwatchList from "../components/SwatchList";
import swatches from "../swatches.js";

const SwatchSelector = props => {
  return <SwatchList swatches={swatches} />;
};

export default SwatchSelector;
