import { Container } from "./styles";
import { TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const ListGroupsCard = () => {
  return (
    <Container>
      <section>
        <header>
          <h2>Meus Grupos</h2> <div>+</div>
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
