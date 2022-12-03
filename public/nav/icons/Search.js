import React from "react";

const Search = ({ color, className, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.25 26.25L20.6425 20.6325L26.25 26.25ZM23.75 13.125C23.75 15.9429 22.6306 18.6454 20.638 20.638C18.6454 22.6306 15.9429 23.75 13.125 23.75C10.3071 23.75 7.60456 22.6306 5.61199 20.638C3.61942 18.6454 2.5 15.9429 2.5 13.125C2.5 10.3071 3.61942 7.60456 5.61199 5.61199C7.60456 3.61942 10.3071 2.5 13.125 2.5C15.9429 2.5 18.6454 3.61942 20.638 5.61199C22.6306 7.60456 23.75 10.3071 23.75 13.125V13.125Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Search;
