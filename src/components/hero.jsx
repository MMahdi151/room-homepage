export default function Hero() {
  return (
    <section className="">
      <div className="w-screen h-fit grid grid-cols-1 lg:grid-cols-[6fr_4fr] xl:grid-cols-[6fr_4fr]">
        <div className="bg-green-400 relative">
          <div className="flex items-center justify-center">
            <img
              src="/images/desktop-image-hero-1.jpg"
              className="hidden md:block lg:block xl:block w-full"
            />
            <img
              src="/images/mobile-image-hero-1.jpg"
              className="block md:hidden lg:hidden xl:hidden w-full"
            />
          </div>
          <div className="h-24 w-44 bg-gray-950 text-gray-300 absolute bottom-0 right-0 flex items-stretch xl:translate-x-full lg:translate-x-full">
            <div className="slide-btn">&gt;</div>
            <div className="slide-btn">&lt;</div>
          </div>
        </div>
        <div className="lg:py-28 lg:px-24 xl:py-28 xl:px-24 px-8 py-12 flex flex-col gap-8">
          <h1 className="font-bold text-5xl tracking-tight">
            Discover innovative ways to decorate
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            delectus saepe, sint harum voluptas quasi voluptatum architecto.
            Neque, excepturi ratione enim ad adipisci soluta nostrum numquam
            distinctio, eaque sit iure.
          </p>
          <a className="uppercase tracking-[12px] font-semibold">
            Shop Now ---
          </a>
        </div>
      </div>
    </section>
  );
}
