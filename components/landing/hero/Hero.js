import Image from "next/image";
import React from "react";
import twoFace from "../../../public/landing page/two-face-hero.png";
import oneFace from "../../../public/landing page/one-face-hero.png";
import circleText from "../../../public/landing page/circle-text-hero.svg";
import CircleText from "../../../public/landing page/icons/CircleText";
import CallToAction from "../../../public/landing page/icons/CallToAction/CallToAction";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[#FDF2EA]">
      <div className="container mx-auto flex gap-7 h-[90vh] md:justify-start justify-center  flex-col bg-[#FDF2EA] md:flex-row ">
        <div className="flex flex-col items-center justify-center gap-5 border-black py-9 md:w-1/3 ">
          <div className="w-full text-center font-semibold">
            <h1 className="text-3xl">
              The Best Duo-tone <br className="hidden md:block" /> buildable
              Foundation
            </h1>
          </div>
          <div className="text-center text-sm md:w-2/3">
            <p>
              We stand behind our products and give genuine advice with customer
              s best interest at hear
            </p>
          </div>
          <Link href="/store">
              <a className="md:mt-9 mt-4 flex gap-11 items-center ">
                <p className="">Shop Foundation </p>
                <CallToAction className=""/>
              </a>
          </Link>
        </div>
        <div className="flex md:gap-8  gap-2 items-center md:w-2/3 ">
          <div className=" relative flex justify-end md:justify-start w-1/2">
            <div className="md:w-[84%] w-[98%]">
            <div className="relative">
            <CircleText className="absolute z-1 -top-[30px] -right-[30px]" color="#3F2B1E" size="80"/>
                <Image
                  src={twoFace}
                  layout="responsive"
                  alt="picture of two faces"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start w-1/2 items-center">
            <div className="w-[60%]">
                <div className="relative">
                  <Image
                    src={oneFace}
                    layout="responsive"
                    alt="picture of two faces"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
