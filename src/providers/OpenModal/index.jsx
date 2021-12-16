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
  const [activityId, setActivityId] = useState(0);
  const [goalId, setGoalId] = useState(0);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleActivityModal = () => {
    setOpenActivityModal(!openActivityModal);
    setEditActivity(false);
  };

  const handleGoalModal = () => {
    setOpenGoalModal(!openGoalModal);
    setEditGoal(false);
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
