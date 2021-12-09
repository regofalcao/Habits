import styled from "styled-components";

export const Container = styled.aside`
  align-self: flex-end;
  width: 55vw;
  max-width: 208px;
  height: 100vh;
  background-color: #4348de;

  section {
    margin-top: 20px;
    width: inherit;
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
      width: inherit;
      max-height: 40px;
      display: flex;
      justify-content: flex-start;
      margin-left: 15px;
      gap: 8px;
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

        &:hover {
          border-bottom: 2px solid #fbf7ec;
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    align-self: flex-start;
  }
`;
