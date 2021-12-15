import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import ListGroupsCard from "../../components/ListGroupsCards";
import { Container, Background } from "./styles";

import ModalAddGroup from "../../components/ModalCreateGroup";

import { useOpenModal } from "../../providers/OpenModal";

const MyGroups = () => {
  const { modalOpen } = useOpenModal();

  return (
    <>
      <Header />
      <SideBar />
      <ModalAddGroup />
      <Container isOpen={modalOpen}>
        <Background>
          <ListGroupsCard />
        </Background>
      </Container>
    </>
  );
};

export default MyGroups;
