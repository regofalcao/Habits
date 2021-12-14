import { Container, IconArea, DescriptionArea, CategoryCard } from "./styles";

import WorkIcon from "@mui/icons-material/Work";

import { useOpenModal } from "../../providers/OpenModal";

const CardGroup = ({ name, category, description }) => {
  const { setEditGroup, setModalOpen } = useOpenModal();

  const handleCard = () => {
    setEditGroup(true);
    setModalOpen(true);
  };

  return (
    <Container onClick={() => handleCard()}>
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
