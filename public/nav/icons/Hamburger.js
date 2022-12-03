import React from "react";

const Hamburger = ({ color, className, size }) => {
  return (
    <svg
      width={size}    
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.875 10.625H33.125M6.875 30.625H33.125H6.875ZM6.875 20.625H33.125H6.875Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Hamburger;
