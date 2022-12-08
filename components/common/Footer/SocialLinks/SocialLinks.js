import React from 'react'
import SocialLink from './SocialLink'
import generateSocialLinks from './SocialLinks.utils'

const SocialLinks = () => {

    const links = generateSocialLinks()
  return (
    <div className="flex gap-4 md:justify-start items-center" >
        {
            links.map((link, idx) => (
                <SocialLink key={idx} link={link} />
            ))
        }
    </div>
  )
}

export default SocialLinks