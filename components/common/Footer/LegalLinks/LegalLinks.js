import React from 'react'
import LegalLink from './LegalLink'
import generateSocialLinks from './LegalLinks.utils'

const LegalLinks = () => {
  const links = generateSocialLinks()

  return (
    <ul className="text-white text-opacity-70 md:text-sm text-xs gap-4 flex">
    {
      links.map((link, idx) => (

        <LegalLink key={link.key} link={link}/>
      ))
    }
    </ul>
  )
}

export default LegalLinks