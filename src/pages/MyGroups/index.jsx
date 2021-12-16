import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import ListGroupsCard from "../../components/ListGroupsCards";
import { Container, Background } from "./styles";

import { useEffect } from "react";

import { useOpenSideBar } from "../../providers/OpenSideBar";

import ModalAddGroup from "../../components/ModalCreateGroup";

import { useOpenModal } from "../../providers/OpenModal";

const MyGroups = () => {
  const { modalOpen } = useOpenModal();

  const { setOpenSidebar } = useOpenSideBar();

  useEffect(() => {
    setOpenSidebar(false);
  }, []);

  return (
    <>
      <Header />
      <SideBar modalOpen={modalOpen} />
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
