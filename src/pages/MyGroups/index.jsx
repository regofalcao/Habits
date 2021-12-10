import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import ListGroupsCard from "../../components/ListGroupsCards";
import { Container, Content, Background, Main } from "./styles";

const MyGroups = () => {
  return (
    <Container>
      <Header />
      <Content>
        <SideBar />
        <Background>
          <ListGroupsCard />
        </Background>
      </Content>
    </Container>
  );
};

export default MyGroups;
