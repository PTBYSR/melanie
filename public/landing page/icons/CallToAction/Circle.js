import React from "react";

const Circle = ({ color, size, className }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24.5" cy="24.5" r="24" stroke={color} />
    </svg>
  );
};

export default Circle;
