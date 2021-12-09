import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e5e5e5;
  height: 90vh;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  input {
    background-color: #fff;
    border-radius: 5px;
    padding: 0px, 15px, 0px, 15px;
    border: solid 1px black;
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
`;
