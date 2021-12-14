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
  const [isFiltered, setIsFiltered] = useState(false);
  useEffect(() => {
    getMyGroups();
  }, []);

  console.log(myGroupsList);

  const filterGroups = () => {
    if (text !== "") {
      const result = myGroupsList.filter(({ name }) => {
        return name.includes(text);
      });

      setFilteredGroups(result);
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  };

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
            onClick={(ev) => {
              setText(ev.target.value);
              filterGroups();
            }}
            label="Pesquisar em meus grupos"
          />
          <SearchIcon />
        </div>
        <ListCards>
          {!isFiltered
            ? myGroupsList.map((group) => (
                <CardGroup key={group.id} group={group} />
              ))
            : filteredGroups.map((group) => (
                <CardGroup key={group.id} group={group} />
              ))}
        </ListCards>
      </section>
    </Container>
  );
};

export default ListGroupsCard;
