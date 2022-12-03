import React from 'react'

const generateLegalLinks = () => {
  return [
    {
        key: "Privacy Policy",
        label: "Privacy Policy",
        route: "/privacypolicy"
    },
    {
        key: "Terms Of Use",
        label: "Terms Of Use",
        route: "/terms"
    },
    {
        key: "Accesibility",
        label: "Accesibility",
        route: "/accesibility"
    },
    {
        key: "Cookie Setting",
        label: "Cookie Settings",
        route: "/cookies"
    },
  ]
}

export default generateLegalLinks