import { Container, IconArea, DescriptionArea, CategoryCard } from "./styles";

import WorkIcon from "@mui/icons-material/Work";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SkateboardingOutlinedIcon from "@mui/icons-material/SkateboardingOutlined";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

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
      <IconArea category={category}>
        {category === "esporte" ? (
          <SkateboardingOutlinedIcon />
        ) : category === "leitura" ? (
          <MenuBookOutlinedIcon />
        ) : category === "saude" ? (
          <MonitorHeartOutlinedIcon />
        ) : category === "trabalho" ? (
          <WorkIcon />
        ) : (
          <AccessibilityIcon />
        )}
      </IconArea>
      <DescriptionArea>
        <section>
          <h2>{name}</h2>
          <CategoryCard category={category}>
            <h4>{category}</h4>
          </CategoryCard>
        </section>

        <span>{description}</span>
      </DescriptionArea>
    </Container>
  );
};

export default CardGroup;
