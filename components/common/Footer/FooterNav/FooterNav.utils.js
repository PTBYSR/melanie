import React from 'react'

export const generateAboutMinisqueLinks = () => {
  return [
    {
        key: "About us",
        label: "About us",
        route: "/about",
    },
    {
        key: "Career",
        label: "Career",
        route: "/career",
    },
    {
        key: "Company Blog",
        label: "Company Blog",
        route: "/blog",
    },
  ]
}

export const generateHelpLinks = () => {
  return [
    {
        key: "Contact",
        label: "Contact",
        route: "/contact",
    },
    {
        key: "Freedom Gift Card",
        label: "Freedom Gift Card",
        route: "/giftcard",
    },
    {
        key: "Return & Exchanges",
        label: "Return & Exchanges",
        route: "/exchanges",
    },
    {
        key: "Help & FAQ",
        label: "Help & FAQ",
        route: "/faq",
    },
  ]
}
