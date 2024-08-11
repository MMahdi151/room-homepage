export default function About() {
  return (
    <section className="w-screen grid grid-cols-1 lg:grid-cols-[2fr_3fr_2fr] xl:grid-cols-[2fr-3fr-2fr]">
      <div>
        <img src="/images/image-about-dark.jpg" />
      </div>
      <div className="px-8 py-12">
        <h1 className="uppercase mb-4 font-bold tracking-[8px]">
          About Our Furniture
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          repellendus expedita? Est dicta cum rem tempora error sint fuga eos
          ipsum at, nam iste distinctio consectetur corporis laboriosam totam
          exercitationem? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Similique soluta et enim, vero aliquid non dolores!
        </p>
      </div>
      <div>
        <img src="/images/image-about-light.jpg" />
      </div>
    </section>
  );
}
