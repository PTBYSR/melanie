import React from 'react'
import FacebookIcon from '../../../../public/footer/icons/FacebookIcon'
import TwitterIcon from '../../../../public/footer/icons/TwitterIcon'
import YoutubeIcon from '../../../../public/footer/icons/YoutubeIcon'
import InstagramIcon from '../../../../public/footer/icons/InstagramIcon'

const generateSocialLinks = () => {
  return [
    {
        label: "facebook",
        key: "facebook",
        url: "",
        icon: (
            <FacebookIcon color="#FFF" size={1.2}/>
        )
    },
    {
        label: "instagram",
        key: "instagram",
        url: "",
        icon: (
            <InstagramIcon color="#FFF" size={1.2}/>
        )
    },
    {
        label: "youtube",
        key: "youtube",
        url: "",
        icon: (
            <YoutubeIcon color="#FFF" size={1.2}/>
        )
    },
    {
        label: "twitter",
        key: "twitter",
        url: "",
        icon: (
            <TwitterIcon color="#FFF" size={1.2}/>
        )
    },
  ]
}

export default generateSocialLinks