/* eslint-disable react-hooks/exhaustive-deps */
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
  GoalCardDisplay,
} from "./style";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import AddButton from "../../components/AddButton";
import CardActivity from "../../components/CardActivity";
import CardMember from "../../components/CardMember";
import ModalCreateGroup from "../../components/ModalCreateGroup";
import ModalCreateActivity from "../../components/ModalCreateActivity";
import ModalCreateGoal from "../../components/ModalCreateGoal";

import { useGroups } from "../../providers/Groups";
import { useUser } from "../../providers/User";
import { useActivities } from "../../providers/Activities";
import { useGoals } from "../../providers/Goals";
import { useOpenSideBar } from "../../providers/OpenSideBar";
import { useOpenModal } from "../../providers/OpenModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CardGoal from "../../components/CardGoal";

const Group = () => {
  const { setOpenSidebar } = useOpenSideBar();

  useEffect(() => {
    setOpenSidebar(false);
  }, []);

  const history = useHistory();
  const { myGroupsList, unsubscribeToAgroup } = useGroups();
  const { goalsList, getGroupGoals } = useGoals();
  const { getActivities, activitiesList } = useActivities();
  const { user } = useUser();
  const { isOwner, setIsOwner } = useOpenSideBar();

  const [groupInfo, setGroupInfo] = useState({});

  const { id } = useParams();
  const groupId = parseInt(id);

  const { name, creator, users_on_group } = groupInfo;

  const {
    handleModal,
    setEditGroup,
    openActivityModal,
    setOpenActivityModal,
    openGoalModal,
    setOpenGoalModal,
    modalOpen,
  } = useOpenModal();

  const exitDeleteButtonHandler = () => {
    unsubscribeToAgroup(groupId);
    setIsOwner(false);
    history.push("/myGroups");
  };

  const editGroupButtonHandler = () => {
    setEditGroup(true);
    handleModal();
  };

  useEffect(() => {
    getActivities(groupId);
  }, []);

  useEffect(() => {
    getGroupGoals(groupId);
  }, []);

  useEffect(() => {
    setGroupInfo(myGroupsList.find((group) => group.id === groupId));
  }, [myGroupsList, goalsList]);

  useEffect(() => {
    creator && creator.id === user.id ? setIsOwner(true) : setIsOwner(false);
  }, [groupInfo]);

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
      <SideBar
        modalOpen={!!openActivityModal || !!openGoalModal || !!modalOpen}
      />
      <ModalCreateActivity isOpen={openActivityModal} groupId={groupId} />
      <ModalCreateGoal isOpen={openGoalModal} groupId={groupId} />
      <ModalCreateGroup isOpen={handleModal} groupId={groupId} />
      <Container>
        <TopContainer>
          <h3>
            <span>{users_on_group && users_on_group.length}</span> Participantes
          </h3>
          {isOwner ? (
            <div>
              <ButtonEdit onClick={editGroupButtonHandler}>Editar</ButtonEdit>
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
        <h2>{name && name}</h2>
        <SectionContainer>
          <LeftSideContainer>
            <ActivitiesSection>
              <SectionTitle>
                <h2>Atividades</h2>
                <AddButton onClick={() => handleModalButton("activity")} />
              </SectionTitle>
              <ActivitiesCardDisplay>
                {activitiesList &&
                  activitiesList.map((activity) => (
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
                <AddButton onClick={() => handleModalButton("goal")} />
              </SectionTitle>
              <GoalCardDisplay>
                {goalsList &&
                  goalsList.map((goal) => (
                    <CardGoal
                      key={goal.id}
                      goalId={goal.id}
                      group={goal.group}
                      title={goal.title}
                      difficulty={goal.difficulty}
                      how_much_achieved={goal.how_much_achieved}
                      achieved={goal.achieved}
                    />
                  ))}
              </GoalCardDisplay>
            </GoalsSection>
          </LeftSideContainer>
          <MembersSection>
            <SectionTitle>
              <h2>Participantes</h2>
            </SectionTitle>
            <MembersCardDisplay>
              {users_on_group &&
                users_on_group.map((user) => (
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
