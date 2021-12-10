import Logo from "../../components/Logo";
import { useHistory } from "react-router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import { Div, Form, Button } from "./style";
import welcome from "../../assets/welcome.svg";

const Signup = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Nome de Usuário Obrigatório"),
    email: yup.string().email("Email Inválido").required("Email Obrigatório"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .min(6, "Senha deve possuir no minimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Senha Obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas não coincidem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitForm = (data) => {
    delete data.confirmPassword;
    api
      .post("users/", data)
      .then((response) => {
        toast.success("Registro Completo");
        return history.push("/login");
      })
      .catch((err) => toast.error(`${err}`));
  };

  return (
    <>
      <Logo />
      <Div>
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <TextField
            sx={{ m: 1 }}
            {...register("username")}
            label="Nome"
            variant="outlined"
            size="small"
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            sx={{ m: 1 }}
            {...register("email")}
            label="E-mail"
            variant="outlined"
            size="small"
            error={!!errors.email}
            helperText={errors.email?.message}
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
          <TextField
            sx={{ m: 1 }}
            {...register("confirmPassword")}
            label="Confirmar Senha"
            type="password"
            variant="outlined"
            size="small"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <img src={welcome} width={708} height={500} alt="welcome-image"></img>
      </Div>
    </>
  );
};

export default Signup;
