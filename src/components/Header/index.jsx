import { Container } from "./styles";
import Logo from "../Logo";

import MenuIcon from "@mui/icons-material/Menu";

import { useOpenSideBar } from "../../providers/OpenSideBar";

const Header = () => {
  const { setOpenSidebar, openSidebar } = useOpenSideBar();

  return (
    <Container>
      <MenuIcon onClick={() => setOpenSidebar(!openSidebar)} />
      <Logo />
    </Container>
  );
};

export default Header;
