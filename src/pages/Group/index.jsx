import { useState } from "react";
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

const Group = () => {
  const [groupInfo, setGroupInfo] = useState({});
  const [isOwner, setIsOwner] = useState(true);
  const [membersCount, setMembersCount] = useState(22);
  const [groupName, setGroupName] = useState("Grupo de estudo");
  const { id } = useParams();

  const getGroupInfos = () => {};
  const checkOwnership = () => {};
  const countMembers = () => {};

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
              <ButtonEdit>Editar</ButtonEdit>
              <ButtonExcludeExit>Excluir</ButtonExcludeExit>
            </div>
          ) : (
            <ButtonExcludeExit>Sair</ButtonExcludeExit>
          )}
        </TopContainer>
        <h2>{groupName}</h2>
        <SectionContainer>
          <LeftSideContainer>
            <ActivitiesSection>
              <SectionTitle>
                <h2>Atividades</h2>
                <AddButton />
              </SectionTitle>
            </ActivitiesSection>
            <GoalsSection>
              <SectionTitle>
                <h2>Metas</h2>
                <AddButton />
              </SectionTitle>
            </GoalsSection>
          </LeftSideContainer>
          <MembersSection>
            <SectionTitle>
              <h2>Participantes</h2>
            </SectionTitle>
          </MembersSection>
        </SectionContainer>
      </Container>
    </>
  );
};

export default Group;
