import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useUser } from "../User";

import api from "../../services/api";

const GroupsContext = createContext({});

export const useGroups = () => {
  const context = useContext(GroupsContext);

  return context;
};

export const GroupsProvider = ({ children }) => {
  const { token } = useUser();

  const [groupsList, setGroupsList] = useState([]);
  const [myGroupsList, setMyGroupsList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [nextPage] = useState("");
  const [previousPage] = useState("");
  const [pageNumber, setPageNumber] = useState(5);
  const [currentId, setCurrentId] = useState(0);

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

  const searchGroups = (string) => {
    api
      .get(`/groups/search=${string}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const searchList = response.data;

        setSearchList(searchList);
      })
      .catch((err) => toast.error("Ocorreu um erro na solicitação"));
  };

  const searchGroupCategory = (category) => {
    api
      .get(`/groups/category=${category}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const searchList = response.data;

        setSearchList(searchList);
      })
      .catch((err) => toast.error("Ocorreu um erro na solicitação"));
  };

  const getGroupsList = (pageNumber) => {
    api
      .get(`/groups/?page=${pageNumber}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { results } = response.data;

        setGroupsList(results);
      })
      .catch((err) => toast.error("Ocorreu um erro na solicitação"));
  };

  const createGroup = (data) => {
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newGroup = response.data;
        const newGroupsList = [...myGroupsList, newGroup];

        localStorage.setItem(
          "@kenzieHabits:groups",
          JSON.stringify(newGroupsList)
        );
        setMyGroupsList(newGroupsList);

        getMyGroups();
        toast.success("Grupo criado");
      })
      .catch((err) => toast.error("Não foi possível criar o grupo"));
  };

  const editerGroup = (data, groupId) => {
    api
      .patch(`/groups/${groupId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getMyGroups();
        toast.success("Grupo atualizado!");
      })
      .catch((err) => {
        const { message } = err;
        if (message === "Only the group creator can update the group") {
          toast.error("Erro! Apenas o criador do grupo pode o atualizar");
        } else {
          toast.error("Não foi possível atualizar o grupo");
        }
      });
  };

  const subscribeToAgroup = (groupId) => {
    api
      .post(`/groups/${groupId}/subscribe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getMyGroups();
        toast.success("Inscrição realizada");
      })
      .catch((err) => {
        const { message } = err;
        if (message === "User already on group") {
          toast.error("Você já faz parte desse grupo");
        } else {
          toast.error("Ocorreu um erro na solicitação");
        }
      });
  };
  const unsubscribeToAgroup = (groupId) => {
    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getMyGroups();
        toast.success("Você saiu do grupo");
      })
      .catch((err) => {
        const { message } = err;
        if (message === "User not on group") {
          toast.error("Erro! O usuário não faz parte deste grupo");
        } else {
          toast.error("Ocorreu um erro na solicitação");
        }
      });
  };

  return (
    <GroupsContext.Provider
      value={{
        groupsList,
        myGroupsList,
        searchList,
        pageNumber,
        currentId,
        setCurrentId,
        getMyGroups,
        goToNextPage,
        goToPreviousPage,
        searchGroups,
        searchGroupCategory,
        getGroupsList,
        createGroup,
        editerGroup,
        subscribeToAgroup,
        unsubscribeToAgroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
