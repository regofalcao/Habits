import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useOpenModal } from "../../providers/OpenModal";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import { Form, Header, SectionButton } from "./styles";
import { useGoals } from "../../providers/Goals";

import CloseIcon from "@mui/icons-material/Close";
import ButtonRadio from "../ButtonRadio";
import SubmitButtons from "../SubmitButtons";
import DateTimePicker from "@mui/lab/DateTimePicker";
import ModalDefault from "../ModalDefault";

import * as yup from "yup";

const ModalCreateGoal = ({ groupId }) => {
  const { createGoal, updateGoal } = useGoals();

  const schema = yup.object().shape({
    title: yup.string().required("Nome da atividade obrigatório"),
    difficulty: yup
      .string()
      .required("Categoria do grupo obrigatória")
      .nullable(),
  });

  const { openGoalModal, setOpenGoalModal, handleGoalModal, editGoal, goalId } =
    useOpenModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: !editGoal && yupResolver(schema),
  });

  const onSubmit = (data) => {
    editGoal ? updateGoal(data, goalId, groupId) : createGoal(data, groupId);

    reset();
  };

  return (
    <ModalDefault isOpen={openGoalModal} setIsOpen={handleGoalModal}>
      <Header>
        <h2>{editGoal ? "Editar meta" : "Cadastrar meta"}</h2>
        <CloseIcon
          onClick={() => {
            handleGoalModal();
            reset();
          }}
        />
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{ height: "10px" }}
          {...register("title")}
          label="Nome da meta"
          error={!!errors.title}
          helperText={errors.title?.message}
        />

        <div>
          <p>Dificuldade:</p>
          <div  className = "select">
          <ButtonRadio
            register={register}
            text="Fácil"
            name="difficulty"
            value="Fácil"
          />
          <ButtonRadio
            register={register}
            text="Médio"
            name="difficulty"
            value="Médio"
          />
          <ButtonRadio
            register={register}
            text="Difícil"
            name="difficulty"
            value="Difícil"
          />
            </div>
        </div>

        <SectionButton>
          <SubmitButtons greenColor type="submit">
            {editGoal ? "Salvar alterações" : "Criar meta"}
          </SubmitButtons>
          <SubmitButtons onClick={() => setOpenGoalModal(false)}>
            {editGoal ? "Excluir" : "Fechar"}
          </SubmitButtons>
        </SectionButton>
      </Form>
    </ModalDefault>
  );
};

export default ModalCreateGoal;
