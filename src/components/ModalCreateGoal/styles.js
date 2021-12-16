import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  height: 500px;
  margin-top: 20px;

  input,
  p,
  textarea,
  fieldset,
  div,
  label {
    font-family: "Satoshi", sans-serif;
  }

  h2 {
    font-weight: bold;
  }

  div{
    .select{
      padding:40px 0 0 0;
      display:flex;
      justify-content: space-between;
    }
  }
  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: 100px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 15px;
  }

  svg {
    color: red;
    cursor: pointer;
    color: #333;
  }
`;

export const SectionButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  justify-content: space-between;
`;
