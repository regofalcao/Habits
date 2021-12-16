import Header from "../../components/Header";
import { CardsConteiner, Conteiner, CardHeader } from "./styled";
import CardHabits from "../../components/CardHabits";
import { useEffect, useState } from "react";
import api from "../../services/api";
import SideBar from "../../components/SideBar";
import { TextField } from "@mui/material";
import ModalCreateHabitis from "../../components/ModalCreateHabits";
import { useUser } from "../../providers/User";

import { useOpenSideBar } from "../../providers/OpenSideBar";

const Dashboard = () => {
  const { setOpenSidebar } = useOpenSideBar();

  useEffect(() => {
    setOpenSidebar(false);
  }, []);

  const { getMyHabits, myHabitsList } = useUser();

  const [opemModal, setOpemModal] = useState(false);
  const [editHabits, setEditiHabits] = useState("");

  const [userInput, setUserInput] = useState("");
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    const newListHabits = myHabitsList.filter(
      (item) => item.title.toLocaleUpperCase() === userInput.toLocaleUpperCase()
    );
    setNewList(newListHabits);
  }, [userInput]);

  useEffect(() => {
    getMyHabits();
  }, []);

  return (
    <>
      {opemModal && (
        <ModalCreateHabitis
          setOpemModal={setOpemModal}
          setEditiHabits={setEditiHabits}
          setOpemModal={setOpemModal}
          editHabits={editHabits}
        />
      )}
      <Header />
      <SideBar />
      <Conteiner>
        <CardsConteiner>
          <CardHeader>
            <p>Meus Habitos</p>
            <div onClick={() => setOpemModal(true)}>+</div>
          </CardHeader>

          <TextField
            size="small"
            fullWidth
            label="Pesquisar em meus habitos"
            onChange={(e) => setUserInput(e.target.value)}
          />

          {userInput ? (
            <CardHabits
              habits={newList}
              setEditiHabits={setEditiHabits}
              setOpemModal={setOpemModal}
            />
          ) : (
            <CardHabits
              habits={myHabitsList}
              setEditiHabits={setEditiHabits}
              setOpemModal={setOpemModal}
            />
          )}
        </CardsConteiner>
      </Conteiner>
    </>
  );
};

export default Dashboard;
