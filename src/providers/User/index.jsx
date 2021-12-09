import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

import { useAuth } from "../Auth";
import api from "../../services/api";

const UserContext = createContext({});

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }) => {
  const { token } = useAuth();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@kenzieHabits:user")) || {}
  );

  const [myHabitsList, setMyHabitsList] = useState(
    JSON.parse(localStorage.getItem("@kenzieHabits:habits")) || []
  );

  const getMyHabits = () => {
    api
      .get("/habits/personal", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyHabitsList(response.data);
      })
      .catch((err) =>
        toast.error("Não foi possível atualizar sua lista de hábitos")
      );
  };

  const createNewHabit = (data) => {
    const { id } = user;
    const newData = {
      ...data,
      achieved: false,
      how_much_achieved: 0,
      user: id,
    };
    api
      .post("/habits/", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newHabit = response.data;
        const newHabitsList = [...myHabitsList, newHabit];

        setMyHabitsList(newHabitsList);

        localStorage.setItem(
          "@kenzieHabits:habit",
          JSON.stringify(newHabitsList)
        );
      })
      .catch((err) =>
        toast.error("Erro! Não foi possível criar o novo hábito")
      );
  };

  const updateHabit = (data, habitId) => {
    api
      .patch(`/habits/${habitId}/`, data)
      .then((response) => {
        toast.success("Hábito atualizado!");
        getMyHabits();
      })
      .catch((err) =>
        toast.error("Erro! Não foi possível atualizar o hábito.")
      );
  };

  const deleteHabit = (habitId) => {
    api
      .delete(`/habits/${habitId}`)
      .then(toast.success("Removido!"))
      .catch((err) => toast.error("Erro! Não foi possível deletar o hábito."));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        myHabitsList,
        getMyHabits,
        createNewHabit,
        updateHabit,
        deleteHabit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
