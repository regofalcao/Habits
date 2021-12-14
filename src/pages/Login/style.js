import styled from "styled-components";

export const DivExt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: flex-start;
  height: 100vh;
  background-color: #fbf7ec;

  img {
    display: none;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;

    img {
      display: inline;
      width: 450px;
      height: 350px;
      margin-top: 200px;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fbf7ec;
  margin-top: 15%;

  img {
    display: none;
  }

  @media (min-width: 800px) {
    flex-direction: column;
    align-items: left;
    margin-top: 80px;
    margin-left: 5%;
    img {
      display: inline;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 40%;

  input {
    background-color: #fff;
    border-radius: 5px;
    padding: 0px, 15px, 0px, 15px;
    border: solid 1px black;
  }

  @media (min-width: 800px) {
    margin-top: 180px;
    input {
      width: 300px;
    }
  }
`;
export const Button = styled.button`
  text-align: center;
  color: white;
  font-size: bold;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 15rem;
  border-radius: 5px;
  background-color: #4348de;

  @media (min-width: 800px) {

      width: 330px;
    

`;
