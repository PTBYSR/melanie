import React from 'react'

const FacebookIcon = ({ color, size, className }) => {
  return (
    <svg className={className} width={"15" * size} height={"29" * size} viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_196)">
    <path d="M3.59815 29V15.3924H0V10.493H3.59815V6.30822C3.59815 3.01983 5.72359 0 10.621 0C12.604 0 14.0702 0.190095 14.0702 0.190095L13.9547 4.76531C13.9547 4.76531 12.4593 4.75075 10.8275 4.75075C9.06143 4.75075 8.77847 5.56464 8.77847 6.91548V10.493H14.0951L13.8637 15.3924H8.77847V29H3.59815Z" fill="#F8F8F8"/>
    </g>
    <defs>
    <clipPath id="clip0_1_196">
    <rect width={"14.0951" * size} height={"29" * size} fill={color}/>
    </clipPath>
    </defs>
    </svg>
    
  )
}

export default FacebookIcon