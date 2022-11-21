import React from 'react'
import clsx from "clsx";
import Button from '../../../ui/Button';

const BlackVariant = ({root, variant}) => {
  return (
    <>
    <div className={variant}>
      <div className={clsx(root, variant)}>
          <div className="w-1/2 flex gap-4 flex-col center-all h-full">
            <div>
                <h2 className="font-semibold text-white text-3xl">Find Your Shade</h2>
            </div>
            <div className="mb-3">
                <p className="font-light text-white">We will help you find the right shade for yo </p>
            </div>
            <div>
                <Button variant="tryout" type="w-m">
                  Try it out
                </Button>
            </div>
          </div>
        <div className="flex center-all w-1/2">
          image
        </div>
      </div>
    </div>
  </>
  )
}

export default BlackVariant