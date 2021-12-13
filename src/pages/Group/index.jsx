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
} from "./style";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import AddButton from "../../components/AddButton";
import CardActivitie from "../../components/CardActivitie";
import CardMember from "../../components/CardMember";

import { useGroups } from "../../providers/Groups";
import { useUser } from "../../providers/User";
import { useOpenSideBar } from "../../providers/OpenSideBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Group = () => {
  const history = useHistory();
  const { myGroups, editGroup, unsubscribeToAgroup } = useGroups();
  const { user } = useUser();
  const { isOwner, setIsOwner } = useOpenSideBar();

  const [groupInfo, setGroupInfo] = useState({});

  const { id } = useParams();

  const { name, creator, users_on_group, goals, activities } = groupInfo;
  const membersCount = users_on_group || 0;

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
                {/* {activities.map((activitie) => (
                  <CardActivitie
                    key={activitie.id}
                    id={activitie.id}
                    title={activitie.title}
                    realization_time={activitie.realization_time}
                    group={activitie.group}
                  />
                ))} */}
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
            </SectionTitle>
            <MembersCardDisplay>
              {/* {users_on_group.map((user) => (
                <CardMember key={user.id} username={user.username} />
              ))} */}
            </MembersCardDisplay>
          </MembersSection>
        </SectionContainer>
      </Container>
    </>
  );
};

export default Group;
