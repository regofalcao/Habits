import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 76px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-bottom: 2px solid #8f8389;

  > div {
    margin-right: 20px;
  }

  svg {
    margin-left: 20px;
    cursor: pointer;
  }

  @media screen and (min-width: 900px) {
    > div {
      margin-left: 20px;
    }
    svg {
      display: none;
    }
  }
`;
