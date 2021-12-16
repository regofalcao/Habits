import { Container, IconArea, DescriptionArea, CategoryCard } from "./styles";

import { useHistory } from "react-router-dom";

import WorkIcon from "@mui/icons-material/Work";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SkateboardingOutlinedIcon from "@mui/icons-material/SkateboardingOutlined";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import EditIcon from "@mui/icons-material/Edit";

import { useGroups } from "../../providers/Groups";

import { useOpenModal } from "../../providers/OpenModal";

const CardGroup = ({ group }) => {
  const history = useHistory();

  const { setEditGroup, setModalOpen } = useOpenModal();

  const { setCurrentId, currentId } = useGroups();

  const { name, category, description, id } = group;

  const handleEdit = () => {
    setEditGroup(true);
    setModalOpen(true);
    setCurrentId(id);
  };

  const handleCard = () => {
    history.push(`/group/${group.id}`);
  };

  return (
    <Container className="CARD" onClick={handleCard}>
      <IconArea category={category}>
        {category === "esporte" ? (
          <SkateboardingOutlinedIcon />
        ) : category === "leitura" ? (
          <MenuBookOutlinedIcon />
        ) : category === "saúde" ? (
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
          <EditIcon
            onClick={(ev) => {
              ev.stopPropagation();
              handleEdit();
            }}
          />
        </section>

        <span>{description}</span>
      </DescriptionArea>
    </Container>
  );
};

export default CardGroup;
