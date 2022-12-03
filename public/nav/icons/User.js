import React from "react";

const User = ({ color, className, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.8429 9.5625C22.5826 13.0734 19.9211 15.9375 16.9992 15.9375C14.0773 15.9375 11.4111 13.0741 11.1554 9.5625C10.8898 5.91016 13.4797 3.1875 16.9992 3.1875C20.5187 3.1875 23.1086 5.97656 22.8429 9.5625Z"
        stroke={color}
        stroke-width="1.6875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.0002 20.1875C11.2228 20.1875 5.35915 23.375 4.27407 29.3914C4.14325 30.1166 4.55364 30.8125 5.31266 30.8125H28.6877C29.4473 30.8125 29.8577 30.1166 29.7269 29.3914C28.6412 23.375 22.7775 20.1875 17.0002 20.1875Z"
        stroke={color}
        stroke-width="1.6875"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default User;
