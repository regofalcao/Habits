import styled from "styled-components";

export const Entrar = styled.button`
  text-align: center;
  color: white;
  font-size: bold;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 15rem;
  border-radius: 15px;
  background-color: #4348de;
`;

export const Cadastro = styled.button`
  text-align: center;
  color: white;
  font-size: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 15rem;
  border-radius: 15px;
  background-color: #36c15d;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fbf7ec;
  height: 90vh;
  img {
    display: none;
  }

  @media (min-width: 800px) {
    flex-direction: collunm;
    align-items: center;
    justify-content: space-evenly;
    img {
      display: inline;
      margin-left: -640px;
    }
    p {
      margin-left: 600px;
      margin-top: -500px;
      display: block;
      font-size: 34px;
    }
    button {
      margin-top: 100px;
      margin-right: 10px;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
  color: #1e1e24;
  font-family: Satoshi;
  font-size: 24px;
  margin-bottom: 50px;
  margin-top: -130px;
`;

export const Image = styled.img`
  margin-left: 100px;
`;
