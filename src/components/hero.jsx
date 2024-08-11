import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import { MobileMenu } from "./mobileMenu";
import { SliderData as slides } from "../data/sliderData";
import { useState } from "react";

export default function Hero() {
  const [slideId, setSlideId] = useState(0);

  const slideCtrl = (v) => {
    setSlideId(slideId + v);
    if (slideId + v > slides.length - 1) setSlideId(0);
    if (slideId + v < 0) setSlideId(slides.length - 1);
  };

  return (
    <section>
      {createPortal(<MobileMenu />, document.body)}
      <div className="w-screen grid grid-cols-1 md:grid-cols-[6fr_4fr]">
        <div className="relative">
          <div className="flex h-full">
            <img
              src={`/images/desktop-image-hero-${slides[slideId].id}.jpg`}
              className="hidden md:block object-cover w-full"
            />
            <img
              src={`/images/mobile-image-hero-${slides[slideId].id}.jpg`}
              className="block md:hidden w-full"
            />
          </div>
          <div className="h-14 w-28 sm:h-24 sm:w-44 absolute bottom-0 right-0 flex md:translate-x-full">
            <button className="slide-btn" onClick={() => slideCtrl(-1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="slide-btn" onClick={() => slideCtrl(1)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className="max-sm:py-16 px-8 py-32 lg:px-20 lg:py-36 flex flex-col gap-4 lg:gap-6">
          <h1 className="font-bold text-4xl lg:text-5xl tracking-tight">
            {slides[slideId].title}
          </h1>
          <p className="p">{slides[slideId].des}</p>
          <a href="#" className="shop-now">
            Shop Now
            <FontAwesomeIcon icon={faArrowRightLong} />
          </a>
        </div>
      </div>
    </section>
  );
}
