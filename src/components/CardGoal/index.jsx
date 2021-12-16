import { Edit } from "@mui/icons-material";
import { Container, Bar, ProgressBar, CheckinConteiner, NameConteiner, ProgressConteiner, Difficulty} from "./styles";
import { useState } from "react";
import { useGoals } from "../../providers/Goals";
import { useOpenModal } from "../../providers/OpenModal";
import api from "../../services/api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CardGoal = (item) => {
  const token = useState(JSON.parse(localStorage.getItem("token")) || "");
  const { setOpenGoalModal, setEditGoal, goalId, setGoalId } = useOpenModal();
  const { updateGoal } = useGoals();


  const style = {
    color: "#4348DE",
    "&:hover": {
      cursor: "pointer",
      color: "#1E1E24",
      transition: "color 0.5",
    },
  };

  const handleButton = () => {
    setGoalId(item.goalId);
    setEditGoal(true);
    setOpenGoalModal(true);
  };

  const updateHowMuchAchieved = (item) => {
    let howMuch = 0;

    item.difficulty.toLocaleLowerCase() === "muito fácil"
      ? (howMuch = 20)
      : item.difficulty.toLocaleLowerCase() === "fácil"
      ? (howMuch = 10)
      : item.difficulty.toLocaleLowerCase() === "médio"
      ? (howMuch = 5)
      : item.difficulty.toLocaleLowerCase() === "difícil"
      ? (howMuch = 2.5)
      : item.difficulty.toLocaleLowerCase() === "muito difícil"
      ? (howMuch = 2)
      : (howMuch = 11);

    if (item.how_much_achieved + howMuch >= 100) {
      const data = {
        achieved: true,
        how_much_achieved: 100,
      };

      console.log(data);

      updateGoal(data, item.goalId, item.group);
    }
    if (item.how_much_achieved + howMuch < 100) {
      const newAchievedValue = item.how_much_achieved + howMuch;
      console.log(item.how_much_achieved + howMuch);
      const data = {
        achieved: false,
        how_much_achieved: newAchievedValue.toFixed(),
      };

      console.log(data);

      updateGoal(data, item.goalId, item.group);
    }
  };

  return (
    <Container>   
        <NameConteiner>
          <h3>{item.title.slice(0, 1).toUpperCase().concat(item.title.slice(1))}</h3>
          <Edit sx={style} onClick={handleButton} />
        </NameConteiner>
        <ProgressConteiner>
          <div  className = "divDifficulty">
            <Difficulty difficulty = {item.difficulty}>
            {item.difficulty.slice(0, 1).toUpperCase().concat(item.difficulty.slice(1))}
            </Difficulty>
            <Bar>
              <ProgressBar
                difficulty={item.difficulty}
                progress={item.how_much_achieved}>
                <p>{item.how_much_achieved.toFixed()}%</p>
              </ProgressBar>
            </Bar>
          </div>
          <CheckinConteiner
            difficulty={item.difficulty}
            onClick={() => updateHowMuchAchieved(item)}>
            <CheckCircleIcon />
          </CheckinConteiner>
        </ProgressConteiner>
    </Container>
  );
};

export default CardGoal;
