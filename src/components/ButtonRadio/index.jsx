import { Container } from "./styles";

const ButtonRadio = ({ text, register, name, ...rest }) => {
  return (
    <Container>
      <input type="radio" {...register(name)} {...rest} id={text} />
      <label htmlFor={text}>{text}</label>
    </Container>
  );
};

export default ButtonRadio;
