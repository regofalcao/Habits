import { Container, ListCards } from "./styles";
import { TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { useOpenSideBar } from "../../providers/OpenSideBar";

import { useOpenModal } from "../../providers/OpenModal";

import { useEffect, useState } from "react";

import AddButton from "../../components/AddButton";

import { useGroups } from "../../providers/Groups";

import CardGroup from "../../components/CardGroup";

const ListGroupsCard = () => {
  const { setModalOpen, setEditGroup } = useOpenModal();

  const { getMyGroups, myGroupsList } = useGroups();

  const { openSidebar } = useOpenSideBar();

  const [text, setText] = useState("");
  const [filteredGroups, setFilteredGroups] = useState([]);

  useEffect(() => {
    getMyGroups();

    const result = myGroupsList.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(text.toLowerCase()) ||
        category.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredGroups(result);
  }, [text]);

  return (
    <Container openSidebar={openSidebar}>
      <section>
        <header>
          <h2>Meus Grupos</h2>
          <AddButton
            onClick={() => {
              setModalOpen(true);
              setEditGroup(false);
            }}
          >
            +
          </AddButton>
        </header>
        <div>
          <TextField
            onChange={(ev) => {
              setText(ev.target.value);
            }}
            label="Pesquisar em meus grupos"
          />
          <SearchIcon />
        </div>
        <ListCards>
          {!!text
            ? filteredGroups.map((group) => (
                <CardGroup key={group.id} group={group} />
              ))
            : myGroupsList.map((group) => (
                <CardGroup key={group.id} group={group} />
              ))}
        </ListCards>
      </section>
    </Container>
  );
};

export default ListGroupsCard;
