import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 50px;
  width: 239px;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  width: 139px;
  align-items: center;
  justify-content: center;
  background-color: #fbf7ec;
  height: 41px;
  border: 2px solid #4348de;
  border-radius: 5px;
  align-self: flex-start;
  position: absolute;

  h1 {
    color: #4348de;
    font-weight: 550;
    font-size: 30px;
    letter-spacing: 0.35rem;
  }
`;

export const SecondaryTitle = styled.div`
  display: flex;
  width: 108px;
  align-items: center;
  justify-content: center;
  height: 30px;
  background-color: #fbf7ec;
  align-self: flex-end;
  border: 2px solid #38c15d;
  border-radius: 5px;
  position: absolute;
  right: 0;

  h1 {
    color: #38c15d;
    font-size: 20px;
    letter-spacing: 0.25rem;
    font-weight: 600;
  }
`;
