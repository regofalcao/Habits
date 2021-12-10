import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ButtonEdit,
  ButtonExcludeExit,
  TopContainer,
  Container,
  SectionContainer,
  ActivitiesSection,
  SectionTitle,
  GoalsSection,
  MembersSection,
  LeftSideContainer,
} from "./style";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import AddButton from "../../components/AddButton";
import { useGroups } from "../../providers/Groups";
import { useUser } from "../../providers/User";
import { useOpenSideBar } from "../../providers/OpenSideBar";

const Group = () => {
  const { myGroups, editGroup, unsubscribeToAgroup } = useGroups();
  const { user } = useUser();
  const { isOwner, setIsOwner } = useOpenSideBar();

  const [groupInfo, setGroupInfo] = useState({});

  const { id } = useParams();

  const { name, creator, users_on_group, goals, activities } = groupInfo;
  const membersCount = users_on_group || 0;

  const getGroupInfo = () => {
    setGroupInfo(myGroups.find((group) => group.id === id));
  };

  const exitDeleteButtonHandler = () => {
    unsubscribeToAgroup(id);
    setIsOwner(false);
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
                {/* <div>
                  {
                    activities.map(activitie => {})
                  }
                </div> */}
                <AddButton />
              </SectionTitle>
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
