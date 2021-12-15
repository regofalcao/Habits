import { Edit } from "@mui/icons-material";
import { Container } from "./styles";
import { useOpenModal } from "../../providers/OpenModal";

const CardActivity = (props) => {
  const style = {
    color: "#4348DE",
    "&:hover": {
      cursor: "pointer",
      color: "#1E1E24",
      transition: "color 0.5",
    },
  };

  const { setOpenActivityModal, setEditActivity, setActivityId } =
    useOpenModal();

  const handleButton = (activityId) => {
    setOpenActivityModal(true);
    setEditActivity(true);
    setActivityId(activityId);
  };

  const formateTheDate = () => {
    const isoDate = props.realization_time.toString();

    const day = isoDate.slice(8, 10);
    const month = isoDate.slice(5, 7);
    const year = isoDate.slice(0, 4);
    const time = isoDate.slice(11, 16);

    return `${day}/${month}/${year} às ${time}`;
  };

  return (
    <Container>
      <div>
        <h3>{props.title}</h3>
        <Edit sx={style} onClick={() => handleButton(props.id)} />
      </div>
      <span>{formateTheDate()}</span>
    </Container>
  );
};

export default CardActivity;
