import React from 'react'
import clsx from "clsx";
import Button from '../../../ui/Button';
import tryout from '../../../../public/landing page/tryout-pic.png'
import Image from 'next/image';
import CameraIcon from '../../../../public/landing page/icons/CameraIcon';


const BlackVariant = ({root, variant}) => {
  return (
    <>
    <div className={variant}>
      <div className={clsx(root, variant)}>
          <div className="md:w-1/2 flex gap-4 flex-col center-all h-full">
            <div>
                <h2 className="font-semibold text-white text-3xl">Find Your Shade</h2>
            </div>
            <div className="mb-3">
                <p className="font-light text-white">We will help you find the right shade for you </p>
            </div>
            <div>
                <Button variant="tryout-black" type="w-m" className="  bg-black flex items-center gap-5">
                <CameraIcon color="#ffffff" size="30"/>  
                Try it out
                </Button>
            </div>
          </div>
        <div className="flex overflow-hidden center-all md:w-1/2 relative">
        <div className="md:w-[66%] w-[60%] md:h-auto">
          <div class="relative">
            <Image src={tryout} layout="responsive"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default BlackVariant