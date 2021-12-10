import { useContext, createContext, useState } from "react";

export const OpenSideBarContext = createContext({});

export const useOpenSideBar = () => {
  const context = useContext(OpenSideBarContext);

  return context;
};

export const OpenSideBarProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  return (
    <OpenSideBarContext.Provider
      value={{ openSidebar, setOpenSidebar, isOwner, setIsOwner }}
    >
      {children}
    </OpenSideBarContext.Provider>
  );
};
