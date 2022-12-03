import Link from 'next/link'
import React from 'react'

const SocialLink = ({ link }) => {
  return (
    <Link href={link.url}>
    <a>{ link.icon }</a>
    </Link>
  )
}

export default SocialLink