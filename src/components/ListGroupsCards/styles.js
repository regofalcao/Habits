import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid var(--black);

  width: 80%;
  background-color: var(--bege);
  flex-direction: column;
  box-sizing: border-box;

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
      /* width: 100%; */

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
        right: 5%;
      }
    }
  }

  @media screen and (min-width: 900px) {
    margin-top: 20px;
    background-color: rgba(251, 247, 236, 0.8);
    section {
      header {
        justify-content: flex-end;
        gap: 40%;
      }

      > div {
        width: 60%;
        align-self: center;

        div {
          max-width: 500px;
        }

        svg {
          right: 8%;
        }
      }
    }
  }
`;
