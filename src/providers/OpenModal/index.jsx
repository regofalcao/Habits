import { useState, useContext, createContext } from "react";

export const OpenModalContext = createContext({});

export const useOpenModal = () => {
  const context = useContext(OpenModalContext);
  return context;
};

export const OpenModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <OpenModalContext.Provider value={{ modalOpen, setModalOpen, handleModal }}>
      {children}
    </OpenModalContext.Provider>
  );
};
