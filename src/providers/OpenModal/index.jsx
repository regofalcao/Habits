import { useState, useContext, createContext } from "react";

export const OpenModalContext = createContext({});

export const useOpenModal = () => {
  const context = useContext(OpenModalContext);
  return context;
};

export const OpenModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editGroup, setEditGroup] = useState(false);
  const [editGoal, setEditGoal] = useState(false);
  const [editActivity, setEditActivity] = useState(false);
  const [openActivityModal, setOpenActivityModal] = useState(false);
  const [openGoalModal, setOpenGoalModal] = useState(false);
  const [activityId, setActivityId] = useState("");
  const [goalId, setGoalId] = useState("");

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleActivityModal = () => {
    setOpenActivityModal(!openActivityModal);
    setEditActivity(!editActivity);
  };

  const handleGoalModal = () => {
    setOpenGoalModal(!openGoalModal);
    setEditGoal(!editGoal);
  };

  return (
    <OpenModalContext.Provider
      value={{
        modalOpen,
        editGroup,
        setEditGroup,
        setModalOpen,
        handleModal,
        handleActivityModal,
        handleGoalModal,
        editGoal,
        setEditGoal,
        editActivity,
        setEditActivity,
        openActivityModal,
        setOpenActivityModal,
        activityId,
        setActivityId,
        openGoalModal,
        setOpenGoalModal,
        goalId,
        setGoalId,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  );
};
