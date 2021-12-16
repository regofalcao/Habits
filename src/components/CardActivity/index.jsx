import { Edit, Delete } from "@mui/icons-material";
import { Container } from "./styles";
import { useOpenModal } from "../../providers/OpenModal";
import { useActivities } from "../../providers/Activities";
import { useOpenSideBar } from "../../providers/OpenSideBar";

const CardActivity = (props) => {
  const style = {
    color: "#4348DE",
    "&:hover": {
      cursor: "pointer",
      color: "#1E1E24",
      transition: "color 0.5",
    },
  };

  const { deleteActivity } = useActivities();

  const { isOwner } = useOpenSideBar();

  const { setOpenActivityModal, setEditActivity, setActivityId } =
    useOpenModal();

  const handleButton = (activityId) => {
    setOpenActivityModal(true);
    setEditActivity(true);
    setActivityId(activityId);
  };

  const handleDeleteIcon = (activityId, groupId) => {
    deleteActivity(activityId, groupId);
    setOpenActivityModal(false);
    setEditActivity(false);
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
        {isOwner && (
          <Delete
            sx={style}
            onClick={() => handleDeleteIcon(props.id, props.group)}
          />
        )}
        <Edit sx={style} onClick={() => handleButton(props.id)} />
      </div>
      <span>{props.realization_time && formateTheDate()}</span>
    </Container>
  );
};

export default CardActivity;
