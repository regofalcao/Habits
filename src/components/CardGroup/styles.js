import styled from "styled-components";

export const Container = styled.li`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 3%;
  padding: 0 10px 0 0;
  border: 2px solid transparent;
  transition: 0.1s linear;

  &:hover {
    border-right: 2px solid var(--black);
    border-radius: 5px;
  }
`;

export const IconArea = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.category === "trabalho"
      ? "#C03636"
      : props.category === "leitura"
      ? "#8F8389"
      : props.category === "saude"
      ? "#38C15D"
      : props.category === "esporte"
      ? "#4348DE"
      : "#F568F8"};
  align-items: center;
  justify-content: center;
  max-width: 60px;
  max-height: 65px;
  border-radius: 5px;
  width: 90px;
  svg {
    color: var(--bege);
  }

  @media screen and (min-width: 900px) {
    max-height: 70px;
    height: 15vh;
    width: 7vw;
    max-width: 80px;
  }
`;

export const DescriptionArea = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75%;

  section {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    height: 30px;
    h2 {
      line-height: 28px;
      text-align: left;
      width: 65%;
      font-weight: 600;
      color: #333;
      font-size: 1rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    > svg {
      color: #333;

      &:hover {
        filter: contrast(10%);
      }
    }

    display: flex;
    flex-direction: row;
  }

  span {
    height: 20px;
    font-size: 12px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }

  @media screen and (min-width: 900px) {
    justify-content: space-around;
  }
`;

export const CategoryCard = styled.section`
  background-color: ${(props) =>
    props.category === "trabalho"
      ? "#C03636"
      : props.category === "leitura"
      ? "#8F8389"
      : props.category === "saude"
      ? "#38C15D"
      : props.category === "esporte"
      ? "#4348DE"
      : "#F568F8"};
  width: 80px;
  display: flex;
  text-align: center;
  border-radius: 8px;
  text-transform: capitalize;

  h4 {
    line-height: 28px;
    height: inherit;
    width: inherit;
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
    text-align: center;
  }

  @media screen and (min-width: 900px) {
    width: 100px;
  }
`;
