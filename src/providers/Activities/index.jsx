import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useUser } from "../User";

import api from "../../services/api";

const ActivitiesContext = createContext({});

export const useActivities = () => {
  const context = useContext(ActivitiesContext);

  return context;
};

export const ActivitiesProvider = ({ children }) => {
  const { token } = useUser();

  const [activitiesList, setActivitiesList] = useState([]);

  const getActivities = (groupId) => {
    api
      .get(`/activities/?group=${groupId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const groupActivities = response.data;

        setActivitiesList(groupActivities);
      })
      .catch((err) => toast.error("Ocorreu um erro na solicitação"));
  };

  const updateActivity = (activityId, groupId) => {
    api
      .patch(`/activities/${activityId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getActivities(groupId);
        toast.success("Atividade atualizada!");
      })
      .catch((err) => {
        const { detail } = err;
        if (detail === "Not found.") {
          toast.error("A atividade não existe");
        } else {
          toast.error("Ocorreu um erro na solicitação");
        }
      });
  };

  const deleteActivity = (activityId) => {
    api
      .delete(`/activities/${activityId}/`)
      .then((response) => {
        setActivitiesList(
          activitiesList.map((activitie) => activitie.id !== activityId)
        );
      })
      .catch((err) => toast.error("Ocorreu um erro na solicitação"));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activitiesList,
        getActivities,
        updateActivity,
        deleteActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
