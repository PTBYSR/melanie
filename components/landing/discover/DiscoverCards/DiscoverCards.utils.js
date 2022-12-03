import React from 'react'
import face from '../../../../public/landing page/face.png'
import lip from '../../../../public/landing page/lip.png'
import kits from '../../../../public/landing page/kits.png'
import eyes from '../../../../public/landing page/eyes.png'
import Image from 'next/image'


const generateDiscoverAssets = () => {
  return [
    {
        label: "Face",
        route: "/face",
        image: (
            <Image src={face}    alt="pic of a face" />
        ),
    },
    {
        label: "Lip",
        route: "/lip",
        image: (
            <Image src={lip}    alt="pic of lips" />
        ),
    },
    {
        label: "Kits",
        route: "/kits",
        image: (
            <Image src={kits}    alt="pic of a lady" />

        ),
    },
    {
        label: "Eyes",
        route: "/eyes",
        image: (
            <Image src={eyes}    alt="pic of a eyes" />

        ),
    }
  ]
}

export default generateDiscoverAssets;