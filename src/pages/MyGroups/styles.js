import styled from "styled-components";

import BackgroundImage from "../../assets/undraw_conversation_re_c26v.svg";

import Teste from "../../assets/Ellipse 3.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  width: 100vw;

  margin-top: 20px;

  @media screen and (min-width: 900px) {
    margin-top: 0;
    width: 100%;
  }
`;

export const Background = styled.div`
  display: flex;

  width: inherit;
  justify-content: center;

  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: center;

    background-image: url(${BackgroundImage});
    background-size: 370px;
    background-position: bottom 50px right;
    background-repeat: no-repeat;
  }
`;
