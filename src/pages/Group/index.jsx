import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ButtonEdit,
  ButtonExcludeExit,
  TopContainer,
  Container,
  SectionContainer,
  ActivitiesSection,
  ActivitiesCardDisplay,
  SectionTitle,
  GoalsSection,
  MembersSection,
  LeftSideContainer,
} from "./style";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import AddButton from "../../components/AddButton";
import CardActivitie from "../../components/CardActivitie";

import { useGroups } from "../../providers/Groups";
import { useUser } from "../../providers/User";
import { useOpenSideBar } from "../../providers/OpenSideBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Group = () => {
  const history = useHistory();
  const { myGroups, editGroup, unsubscribeToAgroup } = useGroups();
  const { user } = useUser();
  const { isOwner, setIsOwner } = useOpenSideBar();

  const [groupInfo, setGroupInfo] = useState({
    activities: [
      {
        id: 11,
        title: "correr",
        realization_time: "2021-03-10T15:00:00Z",
        group: 2,
      },
      {
        id: 12,
        title: "nadar",
        realization_time: "2021-03-10T15:00:00Z",
        group: 2,
      },
      {
        id: 16,
        title: "jogar",
        realization_time: "2021-03-10T15:00:00Z",
        group: 2,
      },
      {
        id: 19,
        title: "Treino funcional na praia",
        realization_time: "2021-03-10T15:00:00Z",
        group: 2,
      },
      {
        id: 20,
        title: "Treino funcional na praia",
        realization_time: "2021-03-10T15:00:00Z",
        group: 2,
      },
      {
        id: 21,
        title: "voar",
        realization_time: "2021-03-10T15:00:00Z",
        group: 2,
      },
      {
        id: 22,
        title: "nadarr",
        realization_time: "2021-03-10T15:00:00Z",
        group: 2,
      },
      {
        id: 23,
        title: "nadar4",
        realization_time: "2017-05-09T12:34:00Z",
        group: 2,
      },
      {
        id: 24,
        title: "nadar com tubarao",
        realization_time: "2017-05-18T01:33:00Z",
        group: 2,
      },
      {
        id: 25,
        title: "nadar",
        realization_time: "2017-06-21T13:32:00Z",
        group: 2,
      },
      {
        id: 26,
        title: "Ganhar da gabi",
        realization_time: "2021-12-20T05:24:00Z",
        group: 2,
      },
      {
        id: 27,
        title: "Ir pro escritorio do vagner",
        realization_time: "2021-12-10T14:24:00Z",
        group: 2,
      },
      {
        id: 28,
        title: "nadarr",
        realization_time: "2021-03-10T15:00:00Z",
        group: 2,
      },
      {
        id: 29,
        title: "nadar4",
        realization_time: "2017-05-09T12:34:00Z",
        group: 2,
      },
      {
        id: 30,
        title: "nadar com tubarao",
        realization_time: "2017-05-18T01:33:00Z",
        group: 2,
      },
      {
        id: 31,
        title: "nadar",
        realization_time: "2017-06-21T13:32:00Z",
        group: 2,
      },
      {
        id: 32,
        title: "Ganhar da gabi",
        realization_time: "2021-12-20T05:24:00Z",
        group: 2,
      },
      {
        id: 33,
        title: "Ir pro escritorio do vagner",
        realization_time: "2021-12-10T14:24:00Z",
        group: 2,
      },
    ],
  });

  const { id } = useParams();

  const { name, creator, users_on_group, goals, activities } = groupInfo;
  const membersCount = users_on_group || 0;

  const getGroupInfo = () => {
    setGroupInfo(myGroups.find((group) => group.id === id));
  };

  const exitDeleteButtonHandler = () => {
    unsubscribeToAgroup(id);
    setIsOwner(false);
    history.push("/myGroups");
  };

  const checkOwnership = () => {
    if (creator.id === user.id) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  };

  // useEffect(() => {
  //   getGroupInfo();
  // }, []);

  // useEffect(() => {
  //   checkOwnership();
  // }, [groupInfo]);

  return (
    <>
      <Header />
      <SideBar />
      <Container>
        <TopContainer>
          <h3>
            <span>{membersCount}</span> Participantes
          </h3>
          {isOwner ? (
            <div>
              <ButtonEdit onClick={editGroup}>Editar</ButtonEdit>
              <ButtonExcludeExit onClick={exitDeleteButtonHandler}>
                Excluir
              </ButtonExcludeExit>
            </div>
          ) : (
            <ButtonExcludeExit onClick={exitDeleteButtonHandler}>
              Sair
            </ButtonExcludeExit>
          )}
        </TopContainer>
        <h2>{name || "Nome do grupo"}</h2>
        <SectionContainer>
          <LeftSideContainer>
            <ActivitiesSection>
              <SectionTitle>
                <h2>Atividades</h2>
                <AddButton />
              </SectionTitle>
              <ActivitiesCardDisplay>
                {activities.map((activitie) => (
                  <CardActivitie
                    id={activitie.id}
                    title={activitie.title}
                    realization_time={activitie.realization_time}
                    group={activitie.group}
                  />
                ))}
              </ActivitiesCardDisplay>
            </ActivitiesSection>
            <GoalsSection>
              <SectionTitle>
                <h2>Metas</h2>
                {/* <div>
                  {
                    goals.map(activitie => {})
                  }
                </div> */}
                <AddButton />
              </SectionTitle>
            </GoalsSection>
          </LeftSideContainer>
          <MembersSection>
            <SectionTitle>
              <h2>Participantes</h2>
              {/* <div>
                  {
                    users_on_group.map(activitie => {})
                  }
                </div> */}
            </SectionTitle>
          </MembersSection>
        </SectionContainer>
      </Container>
    </>
  );
};

export default Group;
