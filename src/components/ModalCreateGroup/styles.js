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

  section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: 100px;
  }
`;

export const TitleCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 44px;

  p {
    color: #d32f2f;
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    text-align: left;
    margin-top: 3px;
    margin-right: 14px;
    margin-bottom: 0;
    margin-left: 14px;
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
