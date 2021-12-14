import { Container, ListCards } from "./styles";
import { TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useOpenSideBar } from "../../providers/OpenSideBar";

import { useOpenModal } from "../../providers/OpenModal";

import AddButton from "../../components/AddButton";

import CardGroup from "../../components/CardGroup";

const ListGroupsCard = () => {
  const { setModalOpen, setEditGroup } = useOpenModal();

  const { openSidebar } = useOpenSideBar();

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
          <CardGroup />
          <CardGroup />
          <CardGroup />
        </ListCards>
      </section>
    </Container>
  );
};

export default ListGroupsCard;
