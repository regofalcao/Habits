import { Container, ListCards } from "./styles";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useOpenSideBar } from "../../providers/OpenSideBar";
import { useOpenModal } from "../../providers/OpenModal";
import { useEffect, useState } from "react";
import AddButton from "../AddButton";
import { useGroups } from "../../providers/Groups";
import CardGroup from "../CardGroup";

const ListGroupsCard = () => {
  const { setModalOpen, setEditGroup } = useOpenModal();
  const token = useState(JSON.parse(localStorage.getItem("token")) || "");

  const { groupsList, setGroupsList, getGroupsList, pageNumber } = useGroups();
  const { openSidebar } = useOpenSideBar();
  const [text, setText] = useState("");
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  useEffect(() => {
    getGroupsList(pageNumber);
  }, []);

  const filterGroups = () => {
    if (text !== "") {
      const result = setGroupsList.filter(({ name }) => {
        return name.includes(text);
      });

      setFilteredGroups(result);
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  };

  console.log(groupsList);

  return (
    <Container openSidebar={openSidebar}>
      <section>
        <header>
          <h2> Grupos </h2>
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
            label="Pesquisar Grupos"
          />
          <SearchIcon />
        </div>
        <ListCards>
          {!isFiltered
            ? groupsList.map((group) => (
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
