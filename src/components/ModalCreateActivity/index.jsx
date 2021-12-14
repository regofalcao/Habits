import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useOpenModal } from "../../providers/OpenModal";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import { Form, Header, SectionButton } from "./styles";

import CloseIcon from "@mui/icons-material/Close";
import SubmitButtons from "../SubmitButtons";
import DateTimePicker from "@mui/lab/DateTimePicker";
import ModalDefault from "../ModalDefault";

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
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: !editActivity && yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { realization_time } = data;
    const isoDate = realization_time.toISOString();

    console.log({ ...data, realization_time: isoDate });
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
        <Controller
          name="realization_time"
          control={control}
          render={({ field }) => (
            <DateTimePicker
              value={field.value}
              onChange={(e) => field.onChange(e)}
              renderInput={(params) => <TextField {...params} />}
            />
          )}
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
