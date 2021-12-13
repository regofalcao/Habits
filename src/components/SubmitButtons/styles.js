import styled from "styled-components";

export const Container = styled.button`
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${(props) =>
    props.greenColor ? "var(--color-secundary)" : "var(--color-tertiary)"};
  padding: 5px 15px;
  box-sizing: border-box;
  font-weight: 600;
  height: 45px;
  transition: 0.1s;
  width: 100%;
  color: white;
  cursor: pointer;

  &:hover {
    border: 2px solid black;
  }
`;
