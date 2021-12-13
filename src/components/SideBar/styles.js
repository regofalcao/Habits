import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  align-self: flex-end;
  width: 55vw;
  max-width: 208px;
  height: 100vh;
  z-index: 1;
  background-color: #4348de;

  section {
    margin-top: 20px;
    width: 90%;
    display: flex;
    margin-left: 12px;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;

    img {
      max-width: 50px;
    }

    h2 {
      text-transform: capitalize;
      font-size: 20px;
      font-weight: 600;
      color: #fbf7ec;
    }
  }

  ul {
    margin: 30px 0 0 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 30vh;
    padding: 0;
    width: inherit;
    justify-content: space-around;

    li {
      color: #fbf7ec;
      width: 95%;
      max-width: 185px;
      max-height: 40px;
      display: flex;
      justify-content: flex-start;
      margin-left: 12px;
      gap: 5px;
      align-items: center;

      svg {
        color: #38c15d;
        font-size: 30px;
      }

      a {
        color: #fbf7ec;
        padding: 0;
        display: flex;
        text-decoration: none;
        align-items: center;
        line-height: 30px;
        height: 28px;
        font-weight: 600;
        margin: 0;
        font-size: 18px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        width: none;

        &:hover {
          border-bottom: 2px solid #fbf7ec;
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    display: none;
    z-index: normal;
  }
`;

export const ContainerDesk = styled(Container)`
  align-self: flex-start;
  display: none;

  ul {
    max-width: 208px;

    li {
      align-items: center;

      a {
        box-sizing: border-box;
        height: 30px;
      }
    }
  }

  @media screen and (min-width: 900px) {
    display: block;
  }
`;
