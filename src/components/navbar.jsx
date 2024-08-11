import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CheckContext } from "../context/checkContext";

export default function Navbar() {
  const { isOpen, setIsOpen, menu } = useContext(CheckContext);

  return (
    <nav
      className={`absolute top-0 left-0 w-full h-32 px-8 sm:px-24 bg-transparent text-white z-50 items-center grid grid-cols-3 sm:flex gap-8 sm:gap-10 lg:gap-16  ${
        isOpen && "hidden"
      }`}
    >
      <button
        onClick={() => setIsOpen(true)}
        className="sm:hidden justify-self-start"
      >
        <FontAwesomeIcon icon={faNavicon} className="nav-btn" />
      </button>
      <img src="/images/logo.svg" className="w-20 mx-auto sm:mx-0" />

      <ul className="gap-8 font-semibold h-8 hidden sm:flex">
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
