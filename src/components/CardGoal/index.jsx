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
    console.log(item);
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
      console.log("100%");
      item.how_much_achieved = 100;
      const data = {
        achieved: true,
        how_much_achieved: 100,
      };

      updateGoal(data, item.goalId, item.group, item.how_much_achieved);
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
      console.log("ainda não");
      item.how_much_achieved = item.how_much_achieved + howMuch;
      const data = {
        achieved: true,
        how_much_achieved: item.how_much_achieved + howMuch,
      };
      updateGoal(data, item.goalId, item.group, item.how_much_achieved);
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
  console.log(`alguma coius`);
  console.log(item);
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
