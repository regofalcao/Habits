import { Edit } from "@mui/icons-material";
import { Container } from "./styles";

const CardMetas = (props) => {
  const style = {
    color: "#4348DE",
    "&:hover": {
      cursor: "pointer",
      color: "#1E1E24",
      transition: "color 0.5",
    },
  };

  const handleButton = () => {};

  const Upgrade = () =>{
      //logica para aumentar a cada dia realizado a meta
  }
  return (
    <Container>
      <div>
        <h3>{props.title}</h3>
        <Edit sx={style} onClick={handleButton} />
      </div>
    </Container>
  );
};

export default CardMetas;
