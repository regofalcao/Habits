import { Edit } from "@mui/icons-material";
import { Container, Bar, ProgressBar, CheckinConteiner } from "./styles";
import { useState } from "react";
import { useGoals } from "../../providers/Goals";
import api from "../../services/api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CardGoal = (item) => {
  const token = useState(JSON.parse(localStorage.getItem("token")) || "");
  const { updateGoal } = useGoals();

  const style = {
    color: "#4348DE",
    "&:hover": {
      cursor: "pointer",
      color: "#1E1E24",
      transition: "color 0.5",
    },
  };

  const handleButton = () => {};

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
      // api
      //   .patch(
      //     `/group/${item.group}/`,
      //     {
      //       achieved: true,
      //       how_much_achieved: 100,
      //     },
      //     {
      //       Authorization: `Bearer ${token}`,
      //     }
      //   )
      //   .then((response) => console.log(response));
    }
    if (item.how_much_achieved + howMuch < 100) {
      const newAchievedValue = item.how_much_achieved + howMuch;
      const data = {
        achieved: false,
        how_much_achieved: newAchievedValue.toFixed(),
      };

      console.log(data);

      updateGoal(data, item.goalId, item.group);
      // api
      //   .patch(
      //     `/group/${item.group}/`,
      //     {
      //       how_much_achieved: item.how_much_achieved + howMuch,
      //     },
      //     {
      //       Authorization: `Bearer ${token}`,
      //     }
      //   )
      //   .then((response) => console.log(response));
    }
  };

  return (
    <Container>
      <div>
        <h3>{item.title}</h3>
        <Edit sx={style} onClick={handleButton} />
        <CheckinConteiner
          difficulty={item.difficulty}
          onClick={() => updateHowMuchAchieved(item)}
        >
          <CheckCircleIcon />
        </CheckinConteiner>
        <Bar>
          <ProgressBar
            difficulty={item.difficulty}
            progress={item.how_much_achieved}
          >
            <p>{item.how_much_achieved.toFixed()}%</p>
          </ProgressBar>
        </Bar>
      </div>
    </Container>
  );
};

export default CardGoal;
