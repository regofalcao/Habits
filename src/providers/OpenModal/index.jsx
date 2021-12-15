import { useState, useContext, createContext } from "react";

export const OpenModalContext = createContext({});

export const useOpenModal = () => {
  const context = useContext(OpenModalContext);
  return context;
};

export const OpenModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editGroup, setEditGroup] = useState(false);
  const [editActivity, setEditActivity] = useState(false);
  const [openActivityModal, setOpenActivityModal] = useState(false);
  const [openGoalModal, setOpenGoalModal] = useState(false);
  const [activityId, setActivityId] = useState("");

  const handleModal = () => {
    setModalOpen(!modalOpen);
    setOpenActivityModal(!openActivityModal);
    setOpenGoalModal(!openGoalModal);
    setEditActivity(!editActivity);
    setEditGroup(!editGroup);
  };

  return (
    <OpenModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        handleModal,
        editGroup,
        setEditGroup,
        editActivity,
        setEditActivity,
        openActivityModal,
        setOpenActivityModal,
        activityId,
        setActivityId,
        openGoalModal,
        setOpenGoalModal,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  );
};
