import React from "react";

const Arrow = ({ color, size, className }) => {
  return (
    <svg
      className={className}
      width={"57" * size}
      height={"8" * size}
      viewBox="0 0 57 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.3536 4.35355C56.5488 4.15829 56.5488 3.84171 56.3536 3.64645L53.1716 0.464466C52.9763 0.269204 52.6597 0.269204 52.4645 0.464466C52.2692 0.659728 52.2692 0.976311 52.4645 1.17157L55.2929 4L52.4645 6.82843C52.2692 7.02369 52.2692 7.34027 52.4645 7.53553C52.6597 7.7308 52.9763 7.7308 53.1716 7.53553L56.3536 4.35355ZM0 4.5L56 4.5V3.5L0 3.5L0 4.5Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;
