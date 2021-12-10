import { Container } from "./styles";
import { TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useOpenModal } from "../../providers/OpenModal";

const ListGroupsCard = () => {
  const { modalOpen, setModalOpen } = useOpenModal();

  console.log(modalOpen);
  return (
    <Container>
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
