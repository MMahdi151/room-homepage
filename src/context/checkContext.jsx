import { createContext, useState } from "react";

export const CheckContext = createContext(null);
export const CheckContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { id: 0, name: "home", link: "/" },
    { id: 1, name: "shop", link: "/shop" },
    { id: 2, name: "about", link: "/about" },
    { id: 3, name: "contact", link: "/contact" },
  ];

  const contextValue = { isOpen, setIsOpen, menu };

  return (
    <CheckContext.Provider value={contextValue}>
      {props.children}
    </CheckContext.Provider>
  );
};
