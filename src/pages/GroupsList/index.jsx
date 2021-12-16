import Header from "../../components/Header";
import ListGroups from "../../components/ListGroups";
import SideBar from "../../components/SideBar";
import { Container, Content, Background } from "./styles";
import ModalAddGroup from "../../components/ModalCreateGroup";
import { useOpenModal } from "../../providers/OpenModal";
import { useEffect } from "react";

import { useOpenSideBar } from "../../providers/OpenSideBar";

const GroupList = () => {
  const { modalOpen } = useOpenModal();

  const { setOpenSidebar } = useOpenSideBar();

  useEffect(() => {
    setOpenSidebar(false);
  }, []);
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
