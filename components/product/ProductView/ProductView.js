import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
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
  console.log(product.images);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div className="w-[500px] min-w-[400px]">
        <div ref={sliderRef} className="keen-slider">
          {product.images.map((image, idx) => (
            <div className={`keen-slider__slide number-slide${idx + 1}`}>
              <Image 
                src={image}
              />
            </div>
          ))}
        </div>
        <div ref={thumbnailRef} className="border flex justify-center keen-slider thumbnail">
        {product.images.map((image, idx) => (
            <div className={`keen-slider__slide number-slide${idx + 1}`}>
              <div class="hover:scale-[1.07]">
                <Image
                  src={image}
                />
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
