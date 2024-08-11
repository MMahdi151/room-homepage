import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section>
      <div className="w-screen grid grid-cols-1 md:grid-cols-[6fr_4fr]">
        <div className="relative">
          <div className="flex h-full">
            <img
              src="/images/desktop-image-hero-1.jpg"
              className="hidden md:block object-cover w-full"
            />
            <img
              src="/images/mobile-image-hero-1.jpg"
              className="block md:hidden w-full"
            />
          </div>
          <div className="h-14 w-28 sm:h-24 sm:w-44 absolute bottom-0 right-0 flex md:translate-x-full">
            <button className="slide-btn">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="slide-btn">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className="max-sm:py-16 px-8 py-32 lg:px-20 lg:py-36 flex flex-col gap-4 lg:gap-6">
          <h1 className="font-bold text-4xl lg:text-5xl tracking-tight">
            Discover innovative ways to decorate
          </h1>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            delectus saepe, sint harum voluptas quasi voluptatum architecto.
            Neque, excepturi ratione enim ad adipisci soluta nostrum numquam
            distinctio, eaque sit iure.
          </p>
          <a href="#" className="shop-now">
            Shop Now
            <FontAwesomeIcon icon={faArrowRightLong} />
          </a>
        </div>
      </div>
    </section>
  );
}
