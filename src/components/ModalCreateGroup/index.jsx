import ModalDefault from "../ModalDefault";

import { useOpenModal } from "../../providers/OpenModal";

import { TextField } from "@mui/material";

import { toast } from "react-toastify";

import CloseIcon from "@mui/icons-material/Close";

import { Form, Header, SectionButton, TitleCategory } from "./styles";

import ButtonRadio from "../ButtonRadio";
import SubmitButtons from "../SubmitButtons";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ModalAddGroup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome do grupo obrigatório"),
    description: yup.string().required("Descrição do grupo obrigatória"),
    category: yup
      .string()
      .required("Categoria do grupo obrigatória")
      .nullable(),
  });

  const { modalOpen, handleModal } = useOpenModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    toast.success("Grupo criado com sucesso!");
  };

  const { setModalOpen } = useOpenModal();

  return (
    <ModalDefault isOpen={modalOpen} setIsOpen={handleModal}>
      <Header>
        <h2>Cadastrar Grupo</h2>
        <CloseIcon onClick={() => setModalOpen(false)} />
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("name")}
          label="Nome do grupo"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          {...register("description")}
          label="Descrição do grupo"
          multiline
          rows={4}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <TitleCategory>
          <h3>Selecionar Categoria:</h3>
          {!!errors.category && <p>{errors.category.message}</p>}
        </TitleCategory>
        <section>
          <ButtonRadio
            register={register}
            text="Esporte"
            name="category"
            value="esporte"
          />
          <ButtonRadio
            register={register}
            text="Saúde"
            name="category"
            value="saude"
          />
          <ButtonRadio
            register={register}
            text="Lazer"
            name="category"
            value="lazer"
          />
          <ButtonRadio
            register={register}
            text="Trabalho"
            name="category"
            value="trabalho"
          />
        </section>

        <SectionButton>
          <SubmitButtons greenColor>Salvar alterações</SubmitButtons>
          <SubmitButtons>Excluir</SubmitButtons>
        </SectionButton>
      </Form>
    </ModalDefault>
  );
};

export default ModalAddGroup;
