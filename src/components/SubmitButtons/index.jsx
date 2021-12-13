import { Container } from "./styles";

const SubmitButtons = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default SubmitButtons;
