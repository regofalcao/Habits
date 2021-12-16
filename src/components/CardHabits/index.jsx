import {
  Conteiner,
  CardConteiner,
  IconConteiner,
  BodyConteiner,
  ConteinerDiscription,
  Bar,
  ProgressBar,
  CheckinConteiner,
  Name,
  Category,
} from "./styled";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
import IcecreamIcon from "@mui/icons-material/Icecream";
import HailIcon from "@mui/icons-material/Hail";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useUser } from "../../providers/User";
import Close from "@mui/icons-material/Close";

const CardHabits = ({ habits, setEditiHabits, setOpemModal }) => {
  habits.sort((a, b) => b.how_much_achieved - a.how_much_achieved);

  const { updateHabit, deleteHabit } = useUser();

  const updateHowMuchAchieved = (item) => {
    let howMuch = 0;

    item.frequency.toLocaleLowerCase() === "diária"
      ? (howMuch = 3.34)
      : item.frequency.toLocaleLowerCase() === "mensal"
      ? (howMuch = 8.34)
      : item.frequency.toLocaleLowerCase() === "semanal"
      ? (howMuch = 4.24)
      : item.frequency.toLocaleLowerCase() === "anual"
      ? (howMuch = 20)
      : (howMuch = 10);

    if (item.how_much_achieved + howMuch >= 100) {
      const data = {
        how_much_achieved: 100,
        achieved: true,
      };
      updateHabit(data, item.id);
    }
    if (item.how_much_achieved + howMuch < 100) {
      const number = Math.round(item.how_much_achieved + howMuch);
      const data = {
        how_much_achieved: number,
      };
      updateHabit(data, item.id);
    }
  };
  const opemEditHabits = (id) => {
    setOpemModal(true);
    setEditiHabits(id);
  };

  return (
    <Conteiner>
      {habits.map((item, index) => (
        <CardConteiner key={index}>
          <IconConteiner
            category={item.category}
            onClick={() => opemEditHabits([item.id, item.title])}
          >
            {item.category.toLocaleLowerCase() === "saúde" ? (
              <VolunteerActivismIcon />
            ) : item.category.toLocaleLowerCase() === "esporte" ? (
              <SkateboardingIcon />
            ) : item.category.toLocaleLowerCase() === "lazer" ? (
              <IcecreamIcon />
            ) : item.category.toLocaleLowerCase() === "trabalho" ? (
              <HailIcon />
            ) : (
              <QuestionMarkIcon />
            )}
          </IconConteiner>

          <BodyConteiner>
            <ConteinerDiscription>
              <div>
                <Name>
                  {item.title
                    .slice(0, 1)
                    .toUpperCase()
                    .concat(item.title.slice(1))}
                </Name>
                <Category category={item.category}>
                  {item.category
                    .slice(0, 1)
                    .toUpperCase()
                    .concat(item.category.slice(1))}
                </Category>
              </div>
              {item.how_much_achieved === 100 ? (
                <CheckinConteiner
                  category={item.category}
                  onClick={() => deleteHabit(item.id)}
                >
                  <Close />
                </CheckinConteiner>
              ) : (
                <CheckinConteiner
                  category={item.category}
                  onClick={() => updateHowMuchAchieved(item)}
                >
                  <CheckCircleIcon />
                </CheckinConteiner>
              )}
            </ConteinerDiscription>
            <Bar>
              <ProgressBar
                progress={item.how_much_achieved}
                category={item.category}
              >
                <p>{item.how_much_achieved.toFixed()}%</p>
              </ProgressBar>
            </Bar>
          </BodyConteiner>
        </CardConteiner>
      ))}
    </Conteiner>
  );
};

export default CardHabits;
