import { Container } from "./styles";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import JoinRightIcon from "@mui/icons-material/JoinRight";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link } from "react-router-dom";

import UserImage from "../../assets/user.svg";

const SideBar = () => {
  return (
    <Container>
      <section>
        <img src={UserImage} alt="user" />
        <h2>Usuário</h2>
      </section>
      <ul>
        <li>
          <FitnessCenterIcon />
          <Link to="/dashboard">Hábitos</Link>
        </li>
        <li>
          <JoinRightIcon />
          <Link to="/myGroups">Grupos</Link>
        </li>
        <li>
          <SearchIcon />
          <Link to="/groupsList">Procurar Grupos</Link>
        </li>
        <li>
          <LogoutIcon />
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </Container>
  );
};

export default SideBar;
