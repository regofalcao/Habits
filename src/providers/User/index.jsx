import { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import jwt_decode from "jwt-decode";
import api from "../../services/api";

const UserContext = createContext({});

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};

export const UserProvider = ({ children }) => {
  const history = useHistory();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@kenzieHabits:user")) || {}
  );

  const [token, setToken] = useState(
    localStorage.getItem("@kenzieHabits:token") || ""
  );

  const [myHabitsList, setMyHabitsList] = useState(
    JSON.parse(localStorage.getItem("@kenzieHabits:habits")) || []
  );

  const login = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access: token } = response.data;

        const decodedToken = jwt_decode(token);
        const { user_id } = decodedToken;

        const user = {
          id: user_id,
          username: data.username,
        };

        localStorage.setItem("@kenzieHabits:token", token);
        localStorage.setItem("@kenzieHabits:user", JSON.stringify(user));

        setToken(token);
        setUser(user);

        history.push("/dashboard");
        toast.success("Você está logado");
      })
      .catch((err) => toast.error("Usuário e/ou senha incorretos"));
  };

  const logout = () => {
    localStorage.removeItem("@kenzieHabits:token");
    localStorage.removeItem("@kenzieHabits:user");
    localStorage.removeItem("@kenzieHabits:groups");
    localStorage.removeItem("@kenzieHabits:habit");

    setToken("");
  };

  const getMyHabits = () => {
    api
      .get("/habits/personal/", {
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
      .patch(`/habits/${habitId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
      .delete(`/habits/${habitId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Removido!");
        getMyHabits();
      })
      .catch((err) => toast.error("Erro! Não foi possível deletar o hábito."));
  };

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        login,
        logout,
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
