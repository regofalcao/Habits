import Header from "../../components/Header";
import { CardsConteiner, Conteiner, CardHeader} from "./styled";
import CardHabits from "../../components/CardHabits";
import { useEffect, useState } from "react";
import api from "../../services/api";
import SideBar from "../../components/SideBar";
import { TextField } from "@mui/material";

const Dashboard = () => {

  const token = useState(JSON.parse(localStorage.getItem("token")) || "");
  const [habitsList, setHabitsList] = useState([{
    id: 2607,
    title: "Calistenia a tarde (15 minutos)",
    category: "Sáude",
    difficulty: "Muito díficil",
    frequency: "ddswa",
    achieved: false,
    how_much_achieved: 90,
    user: 673
  },
  {
    id: 2607,
    title: "batata",
    category: "esporte",
    difficulty: "Muito díficil",
    frequency: "Mensal",
    achieved: false,
    how_much_achieved: 30,
    user: 673
  },{
    id: 2607,
    title: "Cenora",
    category: "lazer",
    difficulty: "Muito díficil",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 50,
    user: 673
  },
  {
    id: 2607,
    title: "CeboLa",
    category: "TRABALHO",
    difficulty: "Muito díficil",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 30,
    user: 673
  },{
    id: 2607,
    title: "Abacate",
    category: "VIAGEM",
    difficulty: "Muito díficil",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 50,
    user: 673
  },
  {
    id: 2607,
    title: "Calistenia a tarde (15 minutos)",
    category: "Sáude",
    difficulty: "Muito díficil",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 30,
    user: 673
  },{
    id: 2607,
    title: "Calistenia a tarde (15 minutos)",
    category: "Sáude",
    difficulty: "Muito díficil",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 50,
    user: 673
  },
  {
    id: 2607,
    title: "Calistenia a tarde (15 minutos)",
    category: "Sáude",
    difficulty: "Muito díficil",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 30,
    user: 673
  },]);
  const [userInput, setUserInput] = useState("");
  const [newList, setNewList] = useState([]);
  

  useEffect(()=>{
      const newListHabits = habitsList.filter((item) => (
        item.title.toLocaleUpperCase() === userInput.toLocaleUpperCase()
      ))
      setNewList(newListHabits);
  },[userInput])

  useEffect(() => {
    api
      .post("/habits/personal/", {
      Authorization: `Bearer ${token}`
      })
      .then(response => setHabitsList(response))
  },[])


  return (
    <>
      <Header />
      <SideBar/>
      <Conteiner>
        <CardsConteiner>
          <CardHeader>
            <p>Meus Habitos</p>
            <div>+</div>
          </CardHeader>
          <TextField  fullWidth
                      label="Pesquisar em meus habitos" 
                      onChange = {e => setUserInput(e.target.value)} />
          {userInput ? <CardHabits habits = {newList}/> : <CardHabits habits = {habitsList} />} 
        </CardsConteiner>
      </Conteiner>
    </>
  );
};

export default Dashboard;
