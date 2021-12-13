import { Container, IconArea, DescriptionArea, CategoryCard } from "./styles";

import WorkIcon from "@mui/icons-material/Work";

const CardGroup = ({ name, category, description }) => {
  return (
    <Container>
      <IconArea>
        <WorkIcon />
      </IconArea>
      <DescriptionArea>
        <section>
          <h2>Grupo de Trabalho</h2>
          <CategoryCard>
            <h4>Trabalho</h4>
          </CategoryCard>
        </section>

        <span>
          Descrição do grupo pode ser grande , então tem que ser responsivo
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </span>
      </DescriptionArea>
    </Container>
  );
};

export default CardGroup;
