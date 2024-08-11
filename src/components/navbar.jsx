import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faNavicon } from "@fortawesome/free-solid-svg-icons";

const menu = [
  { id: 0, name: "home", link: "/" },
  { id: 1, name: "shop", link: "/shop" },
  { id: 2, name: "about", link: "/about" },
  { id: 3, name: "contact", link: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`absolute top-0 left-0 w-full h-32 px-8 sm:px-24 bg-transparent text-white z-50 items-center grid grid-cols-3 sm:flex gap-8 sm:gap-10 lg:gap-16  ${
        isOpen && "bg-white sm:bg-transparent grid-cols-[1fr_3fr] sm:flex gap-8"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`sm:hidden justify-self-start ${isOpen && "text-black"}`}
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faClose} className="nav-btn" />
        ) : (
          <FontAwesomeIcon icon={faNavicon} className="nav-btn" />
        )}
      </button>
      <img
        src="/images/logo.svg"
        className={`w-20 mx-auto sm:mx-0 ${
          isOpen ? "hidden sm:block" : "none"
        }`}
      />
      <ul
        className={`gap-8 font-semibold h-8 ${
          isOpen ? "flex text-black sm:text-white" : "hidden sm:flex"
        }`}
      >
        {menu.map((item) => (
          <a key={item.id} href={item.link} className="relative group">
            <div>{item.name}</div>
            <div className="list-item"></div>
          </a>
        ))}
      </ul>
    </nav>
  );
}
