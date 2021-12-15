import { Container, IconArea, DescriptionArea, CategoryCard } from "./styles";

import { useHistory } from "react-router-dom";

import WorkIcon from "@mui/icons-material/Work";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SkateboardingOutlinedIcon from "@mui/icons-material/SkateboardingOutlined";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import FactCheckIcon from "@mui/icons-material/FactCheck";

import { useGroups } from "../../providers/Groups";

const CardGroupList = ({ group }) => {
  const history = useHistory();

  const { subscribeToAgroup } = useGroups();

  const { name, category, description, id } = group;

  const handleEdit = () => {
    subscribeToAgroup(group.id);
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
          <FactCheckIcon
            fontSize="large"
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

export default CardGroupList;
