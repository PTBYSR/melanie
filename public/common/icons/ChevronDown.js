import React from "react";

const ChevronDown = ({ className, size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.21429 9.29803C5.52493 8.98739 6.01104 8.95914 6.35359 9.21331L6.45173 9.29803L13.9997 16.8456L21.5476 9.29803C21.8583 8.98739 22.3444 8.95915 22.6869 9.21331L22.7851 9.29803C23.0957 9.60867 23.124 10.0948 22.8698 10.4373L22.7851 10.5355L14.6184 18.7021C14.3078 19.0128 13.8216 19.041 13.4791 18.7869L13.381 18.7021L5.21429 10.5355C4.87258 10.1938 4.87258 9.63974 5.21429 9.29803Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronDown;
