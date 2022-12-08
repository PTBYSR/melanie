import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Button from "../../ui/Button";
import CameraIcon from "../../../public/landing page/icons/CameraIcon";
import ChevronRight from "../../../public/common/icons/ChevronRight";
// import "./Product.css"

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function ProductView({ product }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 5,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div className=" md:w-[900px] min-w-[300px]">
        <div className="flex relative"> 
          <div className="rotate-180 truncate absolute md:left-16 top">
            <ChevronRight color="black" size={30} />
          </div>
          <div ref={sliderRef} className="keen-slider">
            {product.images.map((image, idx) => (
              <div key={idx} className={`keen-slider__slide number-slide${idx + 1}`}>
                <div className="w-full ">
                  <Image layout="responsive" src={image} />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute truncate right-0 md:right-16 z-[100] top-[calc(50%-15px)]">
            <ChevronRight className=" " color="black" size={30} />
          </div>
        </div>
        <div className="mb-3 flex justify-center py-4">
          <Button
            variant="tryout-white"
            type="w-m"
            className="text-black flex items-center gap-5"
          >
            <CameraIcon color="#000" size="30" />
            Try it out
          </Button>
        </div>
        <div
          ref={thumbnailRef}
          className="keen-slider thumbnail flex justify-center"
        >
          {product.images.map((image, idx) => (
            <div key={idx} className={`keen-slider__slide number-slide${idx + 1}`}>
              <div class="hover:scale-[1.07]">
                <Image src={image} />
              </div>
            </div>
          ))}
          {/* <div className="keen-slider__slide number-slide5">5</div>
            <div className="keen-slider__slide number-slide6">6</div> */}
        </div>
      </div>
    </>
  );
}
