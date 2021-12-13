import Logo from "../../components/Logo";
import * as yup from "yup";
import { useAuth } from "./src/providers/auth/index.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { Div, Form, Button } from "./style";

function Login() {
  const login = useAuth();

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
      <Div>
        <Logo />
        <Form onSubmit={handleSubmit(login(onSubmitForm))}>
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
    </>
  );
}

export default Login;
