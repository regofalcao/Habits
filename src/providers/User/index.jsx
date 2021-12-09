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
  const [habitsList, setHabtisList] = useState(
    JSON.parse(localStorage.getItem("@kenzieHabits:habits")) || []
  );

  const getMyHabits = () => {};

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
      .then((response) => response.data)
      .catch((err) => toast.error("Não foi possível criar o novo hábito"));
  };

  const deleteHabit = () => {};

  const updateHabit = () => {};
};
