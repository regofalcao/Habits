import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  width: 210px;
  height: 90px;
  border: 1px solid var(--black);
  box-shadow: 4px 5px 11px -7px rgba(0, 0, 0, 0.7);

  padding: 0.5rem;
  border-radius: 3px;
  background-color: var(--light-gray);

 
    h3 {
      font-size: 1.2rem;
      
    }
  }
`;

export const Bar = styled.div`
  background-color: #c4c4c4;
  width: 100%;
  margin: 10px 0 0 0;
  height: 15px;
  border-radius: 3.5px;
  position: relative;
`;

export const ProgressBar = styled.div`
  width: ${(item) => item.progress}%;
  background-color: ${(item) =>
    item.difficulty.toLocaleLowerCase() === "muito fácil"
      ? "#800080"
      : item.difficulty.toLocaleLowerCase() === "fácil"
      ? "#924100"
      : item.difficulty.toLocaleLowerCase() === "médio"
      ? "#C03838"
      : item.difficulty.toLocaleLowerCase() === "difícil"
      ? "#38C15D"
      : item.difficulty.toLocaleLowerCase() === "muito difícil"
      ? "#5baff9"
      : "#8F8389"};
  height: 100%;
  border-radius: 4px;
  font-size: 12px;

  p {
    text-align: center;
  }
`;

export const CheckinConteiner = styled.i`
  font-size: 15px;
  svg {
    font-size: 40px;
    color: ${(item) =>
    item.difficulty.toLocaleLowerCase() === "muito fácil"
      ? "#800080"
      : item.difficulty.toLocaleLowerCase() === "fácil"
      ? "#924100"
      : item.difficulty.toLocaleLowerCase() === "médio"
      ? "#C03838"
      : item.difficulty.toLocaleLowerCase() === "difícil"
      ? "#38C15D"
      : item.difficulty.toLocaleLowerCase() === "muito difícil"
      ? "#5baff9"
      : "#8F8389"};
  }
  @media screen and (min-width: 650px) {
    svg {
      font-size: 50px;
    }
  }
`;

export const NameConteiner = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
`

export const ProgressConteiner = styled.div`
  display:flex;
  width:100%;
  align-items: center;

  .divDifficulty{
    width:90%;
  }
`
export const Difficulty = styled.div`
    background-color:${(item) =>
      item.difficulty.toLocaleLowerCase() === "muito fácil"
        ?   "#eac7ea" 
        : item.difficulty.toLocaleLowerCase() === "fácil"
        ? "#edcaaf"
        : item.difficulty.toLocaleLowerCase() === "médio"
        ? "#efd7d7"
        : item.difficulty.toLocaleLowerCase() === "difícil"
        ? "#daf2e0"
        : item.difficulty.toLocaleLowerCase() === "muito difícil"
        ? "#bebfd6"
        : "#e5e5e5"};
    }
    color: ${(item) =>
      item.difficulty.toLocaleLowerCase() === "muito fácil"
        ? "#800080"
        : item.difficulty.toLocaleLowerCase() === "fácil"
        ? "#924100"
        : item.difficulty.toLocaleLowerCase() === "médio"
        ? "#C03838"
        : item.difficulty.toLocaleLowerCase() === "difícil"
        ? "#38C15D"
        : item.difficulty.toLocaleLowerCase() === "muito difícil"
        ? "#5baff9"
        : "#8F8389"};
  }
    max-inline-size: fit-content;
    padding:0 10px;
    font-size:14px;
    border-radius:5px;
    
`