import { useContext } from "react";
import { CheckContext } from "../context/checkContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export function MobileMenu() {
  const { isOpen, menu, setIsOpen } = useContext(CheckContext);

  return (
    <div
      className={`h-screen w-full fixed top-0 left-0 transition-all duration-500 ${
        !isOpen ? "hidden" : "none"
      }`}
    >
      <nav className="h-32 bg-white flex items-center justify-between px-8">
        <button onClick={() => setIsOpen(false)} className="">
          <FontAwesomeIcon icon={faClose} className="nav-btn text-gray" />
        </button>
        <ul className="font-semibold flex gap-6 h-8">
          {menu.map((item) => {
            return (
              <li key={item.id} href={item.link}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        type="button"
        onClick={() => setIsOpen(false)}
        className={`h-screen w-screen bg-black transtion-all duration-500 delay-200 ${
          !isOpen ? "opacity-0" : "opacity-75"
        }`}
      ></div>
    </div>
  );
}
