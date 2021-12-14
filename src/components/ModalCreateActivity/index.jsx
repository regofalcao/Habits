import ModalDefault from "../ModalDefault";

import { useOpenModal } from "../../providers/OpenModal";

import { TextField } from "@mui/material";

import { toast } from "react-toastify";

import CloseIcon from "@mui/icons-material/Close";

import { Form, Header, SectionButton } from "./styles";

import SubmitButtons from "../SubmitButtons";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ModalCreateActivity = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Nome da atividade obrigatório"),
  });

  const {
    openActivityModal,
    setOpenActivityModal,
    handleModal,
    editActivity,
    setEditActivity,
  } = useOpenModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: !editActivity && yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();

    editActivity
      ? toast.success("Atividade editada com sucesso!")
      : toast.success("Atividade cadastrada com sucesso!");
  };

  return (
    <ModalDefault isOpen={openActivityModal} setIsOpen={handleModal}>
      <Header>
        <h2>{editActivity ? "Editar atividade" : "Cadastrar atividade"}</h2>
        <CloseIcon
          onClick={() => {
            handleModal();
            reset();
          }}
        />
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{ height: "10px" }}
          {...register("title")}
          label="Nome da atividade"
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <SectionButton>
          <SubmitButtons greenColor type="submit">
            {editActivity ? "Salvar alterações" : "Criar atividade"}
          </SubmitButtons>
          <SubmitButtons>{editActivity ? "Excluir" : "Fechar"}</SubmitButtons>
        </SectionButton>
      </Form>
    </ModalDefault>
  );
};

export default ModalCreateActivity;
