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
  MembersCardDisplay,
  MetasDisplay,
} from "./style";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import AddButton from "../../components/AddButton";
import CardActivity from "../../components/CardActivity";
import CardMember from "../../components/CardMember";
import ModalCreateActivity from "../../components/ModalCreateActivity";

import { useGroups } from "../../providers/Groups";
import { useUser } from "../../providers/User";
import { useOpenSideBar } from "../../providers/OpenSideBar";
import { useOpenModal } from "../../providers/OpenModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CardMetas from "../../components/CardMetas";

const Group = () => {
  const history = useHistory();
  const { myGroups, editGroup, unsubscribeToAgroup } = useGroups();
  const { user } = useUser();
  const { isOwner, setIsOwner } = useOpenSideBar();

  const [groupInfo, setGroupInfo] = useState({});

  const { id } = useParams();

  // const { name, creator, users_on_group, goals, activities } = groupInfo;
  const creator = {
    id: 1,
    username: "novousername",
    email: "gabriel-new@kenzie.com.br",
  };
  const activities = [
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
  ];
  const name = "Grupo de leitura";
  const goals = [
    {
      id: 1,
      title: "Kenzinho1",
      difficulty: "Muito díficil",
      achieved: true,
      how_much_achieved: 2,
      group: 2,
    },
  ];
  const users_on_group = [
    {
      id: 4,
      username: "Trabalho-Grupo",
      email: "trabalho@kenzie.com.br",
    },
    {
      id: 7,
      username: "pedrao",
      email: "p3dro@gmail.com",
    },
    {
      id: 38,
      username: "nicolly",
      email: "nicolly@gmail.com",
    },
    {
      id: 42,
      username: "binhuuu",
      email: "binhuuu@gmail.com",
    },
    {
      id: 75,
      username: "Ricardo",
      email: "ricardo@email.com",
    },
    {
      id: 1,
      username: "novousername",
      email: "gabriel-new@kenzie.com.br",
    },
    {
      id: 95,
      username: "caioclavico",
      email: "caioclavico@kenzie.com.br",
    },
    {
      id: 112,
      username: "bruno-faria",
      email: "brunofaria@kenzie.com.br",
    },
  ];

  const membersCount = users_on_group.length || 0;

  const {
    openActivityModal,
    setOpenActivityModal,
    openGoalModal,
    setOpenGoalModal,
  } = useOpenModal();

  // const getGroupInfo = () => {
  //   setGroupInfo(myGroups.find((group) => group.id === id));
  // };

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

  const handleModalButton = (type) => {
    if (type === "activity") {
      setOpenActivityModal(true);
    } else {
      setOpenGoalModal(true);
    }
  };

  return (
    <>
      <Header />
      <SideBar />
      <ModalCreateActivity isOpen={openActivityModal} groupId={id} />
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
                <AddButton onClick={() => handleModalButton("activity")} />
              </SectionTitle>
              <ActivitiesCardDisplay>
                {activities.map((activity) => (
                  <CardActivity
                    key={activity.id}
                    id={activity.id}
                    title={activity.title}
                    realization_time={activity.realization_time}
                    group={activity.group}
                  />
                ))}
              </ActivitiesCardDisplay>
            </ActivitiesSection>
            <GoalsSection>
              <SectionTitle>
                <h2>Metas</h2>
                <MetasDisplay>
                  {/* {goals.map((goal) => (
                    <CardMetas
                      group={goal.group}
                      title={goal.title}
                      difficulty={goal.difficulty}
                      how_much_achieved={goal.how_much_achieved}
                      achieved={goal.achieved}
                    />;
                  ))} */}
                </MetasDisplay>
                <AddButton />
              </SectionTitle>
            </GoalsSection>
          </LeftSideContainer>
          <MembersSection>
            <SectionTitle>
              <h2>Participantes</h2>
            </SectionTitle>
            <MembersCardDisplay>
              {users_on_group.map((user) => (
                <CardMember key={user.id} username={user.username} />
              ))}
            </MembersCardDisplay>
          </MembersSection>
        </SectionContainer>
      </Container>
    </>
  );
};

export default Group;
