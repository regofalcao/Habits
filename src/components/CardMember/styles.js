import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-shrink: 0;
  width: 210px;
  height: 70px;
  border: 1px solid var(--black);
  box-shadow: 4px 5px 11px -7px rgba(0, 0, 0, 0.7);

  padding: 0.5rem;
  border-radius: 3px;
  background-color: var(--light-gray);

  div {
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;

    h3 {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;
