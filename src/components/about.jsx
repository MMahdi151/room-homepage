export default function About() {
  return (
    <section className="w-screen grid grid-cols-[2fr_3fr_2fr] xl:grid-cols-[2fr-3fr-2fr]">
      <div className="aspect-video sm:aspect-auto w-auto">
        <img
          src="/images/image-about-dark.jpg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="">
        <h1 className="uppercase mb-4 font-bold tracking-[5px]">
          About Our Furniture
        </h1>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          repellendus expedita? Est dicta cum rem tempora error sint fuga eos
          ipsum at, nam iste distinctio consectetur corporis laboriosam totam
          exercitationem? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Similique soluta et enim, vero aliquid non dolores!
        </p>
      </div>
      <div className="acpect-video sm:aspect-auto w-auto">
        <img
          src="/images/image-about-light.jpg"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
