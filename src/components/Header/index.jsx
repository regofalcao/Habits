import { Container } from "./styles";
import Logo from "../Logo";

import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

const Header = () => {
  return (
    <Container>
      <Logo />
      <MenuIcon />
    </Container>
  );
};

export default Header;

{
  /*onClick={() => setOpenSidebar(!openSidebar)}*/
}
