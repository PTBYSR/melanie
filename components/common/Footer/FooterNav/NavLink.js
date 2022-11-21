import Link from 'next/link'
import React from 'react'

const NavLink = ({ nav }) => {
  return (
    <li>
    <Link href={nav.route} >
    {nav.label}
    </Link>
    </li>
  )
}

export default NavLink