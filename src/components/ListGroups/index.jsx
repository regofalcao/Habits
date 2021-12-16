import { Container, ListCards, Button } from "./styles";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useOpenSideBar } from "../../providers/OpenSideBar";
import { useOpenModal } from "../../providers/OpenModal";
import { useEffect, useState } from "react";
import AddButton from "../AddButton";
import { useGroups } from "../../providers/Groups";
import CardGroupList from "../CardGroupsList";

const ListGroupsCard = () => {
  const { setModalOpen, setEditGroup } = useOpenModal();

  const {
    groupsList,
    searchGroups,
    searchList,
    getGroupsList,
    nextPage,
    previousPage,
    pageNumber,
    goToNextPage,
    goToPreviousPage,
  } = useGroups();

  const handleNext = () => {
    goToNextPage(pageNumber);
  };

  const handlePrevious = () => {
    goToPreviousPage(pageNumber);
  };

  const { openSidebar } = useOpenSideBar();
  const [text, setText] = useState("");
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  useEffect(() => {
    getGroupsList(pageNumber);
  }, [pageNumber]);

  const filterGroups = () => {
    if (text !== "") {
      searchGroups(text);
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  };

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
            onChange={(ev) => {
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
                <CardGroupList key={group.id} group={group} />
              ))
            : searchList.map((group) => (
                <CardGroupList key={group.id} group={group} />
              ))}
        </ListCards>
        <p>
          <Button onClick={() => handlePrevious()}>Página Anterior</Button>
          <Button onClick={() => handleNext()}>Próxima Página</Button>
        </p>
      </section>
    </Container>
  );
};

export default ListGroupsCard;
