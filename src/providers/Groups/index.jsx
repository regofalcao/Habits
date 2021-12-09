import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

import { useAuth } from "../Auth";

import api from "../../services/api";

const GroupsContext = createContext({});

const useGroups = () => {
  const context = useContext(GroupsContext);

  return context;
};

const GroupsProvider = ({ children }) => {
  const { token } = useAuth();

  const [groupsList, setGroupsList] = useState([]);
  const [myGroupsList, setMyGroupsList] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const getMyGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const myGroups = response.data;

        localStorage.setItem("@kenzieHabits:groups", JSON.stringify(myGroups));
        setMyGroupsList(myGroups);
        toast.success("Lista de grupos atualizada");
      })
      .catch((err) =>
        toast.error("Erro! Não foi possível atualizar sua lista de grupos")
      );
  };

  const goToNextPage = (pageNumber) => {
    if (nextPage) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPreviousPage = (pageNumber) => {
    if (previousPage) {
      setPageNumber(pageNumber - 1);
    }
  };

  const searchGroups = () => {};

  const searchGroupCategory = () => {};
  const getGroupsList = () => {
    api
      .get(`/groups/page=${pageNumber}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const groupsList = response.data;

        setGroupsList(groupsList);
      })
      .catch((err) => toast.error("Ocorreu um erro na solicitação"));
  };
  const createGroup = () => {};
  const editGroup = () => {};
  const subscribeToAgroup = () => {};
  const unsubscribeToAgroup = () => {};

  return <GroupsContext.Provider value={{}}>{children}</GroupsContext.Provider>;
};
