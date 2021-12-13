import styled from "styled-components";

export const Container = styled.div`
  font-size: 1rem;
  text-align: center;
  border-radius: 5px;
  background-color: var(--light-gray);
  color: var(--color-primary);
  width: 100px;
  height: 40px;
  cursor: pointer;

  input,
  label {
    cursor: pointer;
  }
  input {
    display: none;
  }

  label {
    font-weight: 500;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: inherit;
    transition: 0.1s;

    &:hover {
      transition: none;
      border: 2px solid var(--black);
      border-radius: 5px;
    }
  }

  input:checked + label {
    border-radius: 5px;
    background-color: lightgray;
    filter: contrast(90%);
  }
`;
