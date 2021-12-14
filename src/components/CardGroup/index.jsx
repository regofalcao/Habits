import { Container, IconArea, DescriptionArea, CategoryCard } from "./styles";

import WorkIcon from "@mui/icons-material/Work";

import { useGroups } from "../../providers/Groups";

import { useOpenModal } from "../../providers/OpenModal";

const CardGroup = ({ group }) => {
  const { setEditGroup, setModalOpen } = useOpenModal();

  const { setCurrentId } = useGroups();

  const { name, category, description, id } = group;

  const handleCard = () => {
    setEditGroup(true);
    setModalOpen(true);
    setCurrentId(id);
  };

  return (
    <Container onClick={() => handleCard()}>
      <IconArea>
        <WorkIcon />
      </IconArea>
      <DescriptionArea>
        <section>
          <h2>{name}</h2>
          <CategoryCard>
            <h4>{category}</h4>
          </CategoryCard>
        </section>

        <span>{description}</span>
      </DescriptionArea>
    </Container>
  );
};

export default CardGroup;
