import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import ListGroupsCard from "../../components/ListGroupsCards";
import { Container, Content, Background } from "./styles";

import ModalAddGroup from "../../components/ModalCreateGroup";

import { useOpenModal } from "../../providers/OpenModal";

const MyGroups = () => {
  const { modalOpen } = useOpenModal();

  return (
    <>
      <ModalAddGroup />
      <Container isOpen={modalOpen}>
        <Header />
        <Content>
          <SideBar />
          <Background>
            <ListGroupsCard />
          </Background>
        </Content>
      </Container>
    </>
  );
};

export default MyGroups;
