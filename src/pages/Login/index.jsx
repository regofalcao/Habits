import Logo from "../../components/Logo";
import * as yup from "yup";
import { useUser } from "../../providers/User";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { Div, Form, Button, DivExt } from "./style";
import loginImg from "../../assets/login-notebook.png";

const Login = () => {
  const { login } = useUser();

  const formSchema = yup.object().shape({
    username: yup.string().required("Nome de Usuário Obrigatório"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .min(6, "Senha deve possuir no minimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitForm = (data) => login(data);

  return (
    <>
      <DivExt>
        <img src={loginImg} alt="login background" />
        <Div>
          <Logo />
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <TextField
              sx={{ m: 1 }}
              {...register("username")}
              label="Usuário"
              variant="outlined"
              size="small"
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              sx={{ m: 1 }}
              {...register("password")}
              label="Senha"
              variant="outlined"
              type="password"
              size="small"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button type="submit">Entrar</Button>
          </Form>
        </Div>
      </DivExt>
    </>
  );
};

export default Login;
