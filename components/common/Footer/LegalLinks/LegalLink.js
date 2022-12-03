import Link from 'next/link'
import React from 'react'

const LegalLink = ({ link }) => {
  return (
    <Link href={link.route}>
        <a>
          <li>
          {link.label}
          </li>
        </a>
    </Link>
  )
}

export default LegalLink