import styled from "styled-components";

import { TextField } from "@mui/material";

export const Form = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  height: 460px;
  margin-top: 20px;

  h2 {
    font-weight: bold;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 100px;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${(props) =>
    props.greenColor ? "var(--color-secundary)" : "var(--color-tertiary)"};
  padding: 5px 15px;
  box-sizing: border-box;
  font-weight: 600;
  height: 45px;
  width: 100%;
  color: white;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 15px;
  }

  svg {
    color: #333;
  }
`;

export const SectionButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  justify-content: space-between;
`;
