import { Container, ListCards } from "./styles";
import { TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useOpenSideBar } from "../../providers/OpenSideBar";

import { useOpenModal } from "../../providers/OpenModal";

import { useEffect } from "react";

import AddButton from "../../components/AddButton";

import { useGroups } from "../../providers/Groups";

import CardGroup from "../../components/CardGroup";

const ListGroupsCard = () => {
  const { setModalOpen, setEditGroup } = useOpenModal();

  const { getMyGroups, myGroupsList } = useGroups();

  const { openSidebar } = useOpenSideBar();

  useEffect(() => {
    getMyGroups();
  }, []);

  console.log(myGroupsList);

  return (
    <Container openSidebar={openSidebar}>
      <section>
        <header>
          <h2>Meus Grupos</h2>
          <AddButton
            onClick={() => {
              setModalOpen(true);
              setEditGroup(false);
            }}
          >
            +
          </AddButton>
        </header>
        <div>
          <TextField label="Pesquisar em meus grupos" />
          <SearchIcon />
        </div>
        <ListCards>
          {myGroupsList.map((group) => (
            <CardGroup key={group.id} group={group} />
          ))}
        </ListCards>
      </section>
    </Container>
  );
};

export default ListGroupsCard;
