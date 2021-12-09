import { useContext, createContext, useState } from "react";

export const OpenSideBarContext = createContext();

export const OpenSideBarProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <OpenSideBarContext.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </OpenSideBarContext.Provider>
  );
};

export const useOpenSideBar = () => useContext(OpenSideBarContext);
