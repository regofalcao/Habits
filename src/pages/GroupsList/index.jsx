import Header from "../../components/Header";
import ListGroups from "../../components/ListGroups";
import SideBar from "../../components/SideBar";
import { Container, Content, Background } from "./styles";
import ModalAddGroup from "../../components/ModalCreateGroup";
import { useOpenModal } from "../../providers/OpenModal";

const GroupList = () => {
  const { modalOpen } = useOpenModal();
  return (
    <>
      <Header />
      <SideBar />
      <ModalAddGroup />
      <Container isOpen={modalOpen}>
        <Background>
          <ListGroups />
        </Background>
      </Container>
    </>
  );
};

export default GroupList;
