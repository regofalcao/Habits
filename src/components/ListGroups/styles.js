import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  cursor: pointer;
  color: white;
  font-size: bold;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 10rem;
  border-radius: 5px;
  background-color: #4348de;
`;
export const Container = styled.main`
  display: flex;
  border-radius: 8px;
  padding: 20px 12px;
  border: 1px solid var(--black);
  opacity: ${(props) => props.openSidebar && "0.9"};
  min-height: 80vh;
  width: 95%;
  background-color: var(--bege);
  flex-direction: column;
  box-sizing: border-box;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #c4c4c4;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #11995e;
    border-radius: 20px;
    border: 3px solid #11995e;
  }

  section {
    display: flex;
    flex-direction: column;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-weight: bold;
        color: var(--black);
        font-size: 1.2rem;
      }

      > div {
        background-color: var(--color-secundary);
        border-radius: 5px;
        box-sizing: border-box;
        color: var(--light-gray);
        width: 40px;
        font-size: 28px;
        padding: 0 2px;
        cursor: pointer;
      }
    }

    > div {
      margin-top: 20px;
      position: relative;
      display: flex;
      justify-content: center;

      div {
        max-height: 40px;
        position: relative;
        width: 100%;

        label {
          line-height: 14px;
        }
      }

      svg {
        position: absolute;
        font-size: 1.9rem;
        top: 15%;
        right: 1%;
      }
    }
  }

  @media screen and (min-width: 900px) {
    margin-top: 20px;
    width: 80%;
    background-color: rgba(251, 247, 236, 0.8);
    section {
      header {
        justify-content: flex-end;
        gap: 37%;
      }

      > div {
        width: 60%;
        align-self: center;

        div {
          max-width: 500px;
        }

        svg {
          right: 5%;
        }
      }
    }
  }
`;

export const ListCards = styled.ul`
  list-style: none;
  margin-top: 20px;
  gap: 25px;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    align-self: center;
    width: 62%;
  }
`;
