import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto flex md:flex-row flex-col h-[80vh] ">
        <div className="py-9 flex flex-col items-center justify-center gap-5 md:w-1/3 border-black ">
            <div className="w-full text-center font-semibold">
                <h1 className="text-3xl">
                    The Best Duo-tone <br className="hidden md:block"/> buildable Foundation
                </h1>
            </div>
            <div className="md:w-2/3 text-sm text-center">
                <p>
                We stand behind our products and give genuine 
                advice with customer s best interest at hear
                </p>
            </div>
        </div>
        <div className="flex md:w-2/3 border-black ">
            <div className="border-black  w-1/2 "></div>
            <div className="border-black  w-1/2 "></div>
        </div>
    </div>
  )
}

export default Hero