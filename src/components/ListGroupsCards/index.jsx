import { Container } from "./styles";
import { TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useOpenSideBar } from "../../providers/OpenSideBar";

import { useOpenModal } from "../../providers/OpenModal";

const ListGroupsCard = () => {
  const { modalOpen, setModalOpen } = useOpenModal();

  const { openSidebar } = useOpenSideBar();

  return (
    <Container openSidebar={openSidebar}>
      <section>
        <header>
          <h2>Meus Grupos</h2> <div onClick={() => setModalOpen(true)}>+</div>
        </header>
        <div>
          <TextField label="Pesquisar em meus grupos" />
          <SearchIcon />
        </div>
      </section>
    </Container>
  );
};

export default ListGroupsCard;
