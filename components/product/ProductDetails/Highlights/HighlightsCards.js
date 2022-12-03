import React from "react";
import HighlightsCard from "./HighlightsCard";
import generateHighlights from "./Hightlights.utils";

const HighlightsCards = () => {
  const highlights = generateHighlights();

  return (
    <div >
      {highlights.map((highlight, idx) => (
        <HighlightsCard highlight={highlight} key={idx} />
      ))}
    </div>
  );
};

export default HighlightsCards;
