import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useUser } from "../User";

import api from "../../services/api";

const GoalsContext = createContext({});

export const useGoals = () => {
  const context = useContext(GoalsContext);

  return context;
};

export const GoalsProvider = ({ children }) => {
  const { token } = useUser();

  const [goalsList, setGoalsList] = useState([]);

  const getGoals = (groupId) => {
    api
      .get(`/groups/:${groupId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { results } = response.data;

        setGoalsList(results);
      })
      .catch((err) => toast.error("Ocorreu um erro na solicitação"));
  };

  const createGoal = (data, groupId) => {
    const newGoal = {
      ...data,
      achieved: false,
      how_much_achieved: 0,
      group: groupId,
    };

    api
      .post("/goals/", newGoal, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newGoal = response.data;
        const newGoalList = [...goalsList, newGoal];

        setGoalsList(newGoalList);

        getGoals();
        toast.success("Meta criada");
      })
      .catch((err) => toast.error("Não foi possível criar a meta"));
  };

  const updateGoal = (data, goalId, groupId) => {
    api
      .patch(`/goals/:${goalId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getGoals(groupId);
        toast.success("Meta atualizada");
      })
      .catch((err) => {
        const { detail } = err;
        if (detail === "Not found.") {
          toast.error("Meta não encontrada!");
        } else {
          toast.error("Ocorreu um erro na solicitação");
        }
      });
  };

  const deleteGoal = (goalId) => {
    api
      .delete(`/goals/${goalId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGoalsList(goalsList.map((goal) => goal.id !== goalId));
        toast.success("Meta deletada");
      })
      .catch((err) => toast.error("Ocorreu um erro na solicitação"));
  };

  return (
    <GoalsContext.Provider
      value={{
        goalsList,
        getGoals,
        createGoal,
        updateGoal,
        deleteGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
