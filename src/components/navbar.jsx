import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full h-36 px-20 bg-transparent z-50 flex items-center gap-14">
      <img src="/images/logo.svg" className="w-18 sm:hidden" />
      <ul className="gap-10 sm:text-black sm:bg-white text-white font-semibold hidden lg:flex xl:flex list">
        <li href="#">home</li>
        <li href="#shop">shop</li>
        <li href="#about">about</li>
        <li href="#contact">contact</li>
      </ul>
    </nav>
  );
}
