import { useHistory } from "react-router-dom";
import Logo from "../../components/Logo";
import { Entrar, Cadastro, Div, Text, Image, Container } from "./styles";
import home from "../../assets/home.svg";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <Logo />

      <Div>
        <Image src={home} width={600} height={500} alt="home-image"></Image>
        <Text>
          {" "}
          Um lugar para manter seus habitos em dia,<br></br> além de conhecer
          outras pessoas<br></br> que tem os mesmos interesses que você !
        </Text>

        <div>
          <Cadastro onClick={() => history.push("/signup")}>
            Cadastre-se
          </Cadastro>
          <Entrar onClick={() => history.push("/login")}>Entrar</Entrar>
        </div>
      </Div>
    </>
  );
};

export default Home;
