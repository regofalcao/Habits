import { useOpenModal } from "../../providers/OpenModal";
import { TextField } from "@mui/material";
import { useGroups } from "../../providers/Groups";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Form,
  Header,
  SectionButton,
  TitleCategory,
  InputArea,
  SectionCloseButton,
} from "./styles";

import ButtonRadio from "../ButtonRadio";
import SubmitButtons from "../SubmitButtons";
import ModalDefault from "../ModalDefault";
import CloseIcon from "@mui/icons-material/Close";

import * as yup from "yup";

const ModalAddGroup = ({ groupId }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome do grupo obrigatório"),
    description: yup.string().required("Descrição do grupo obrigatória"),
    category: yup
      .string()
      .required("Categoria do grupo obrigatória")
      .nullable(),
  });

  const { modalOpen, handleModal, editGroup, setModalOpen } = useOpenModal();

  const { createGroup, unsubscribeToAgroup, editerGroup } = useGroups();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: !editGroup && yupResolver(schema),
  });

  const createdGroup = (data) => {
    reset();
    createGroup(data);
  };

  const editedGroup = (data) => {
    reset();

    if (!editGroup) {
      createGroup(data);
    }

    if (editGroup) {
      if (data.name === "") {
        delete data.name;
      }
      if (data.description === "") {
        delete data.description;
      }

      if (data.category === null) {
        delete data.category;
      }
      editerGroup(data, groupId);
      setModalOpen(false);
    }
  };

  const deleteGroup = () => {
    unsubscribeToAgroup(groupId);
    setModalOpen(false);
  };

  const closeGroup = () => {
    setModalOpen(false);
    reset();
  };

  return (
    <ModalDefault isOpen={modalOpen} setIsOpen={handleModal}>
      <Header>
        <h2>{editGroup ? "Editar Grupo" : "Cadastrar Grupo"}</h2>
        <CloseIcon
          onClick={() => {
            handleModal();
            reset();
          }}
        />
      </Header>
      <Form
        onSubmit={
          !!editGroup ? handleSubmit(editedGroup) : handleSubmit(createdGroup)
        }
      >
        <InputArea>
          <TextField
            sx={{ height: "10px" }}
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
        </InputArea>
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
            value="saúde"
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
          <SubmitButtons greenColor type="submit">
            {editGroup ? "Salvar alterações" : "Criar Grupo"}
          </SubmitButtons>
        </SectionButton>
      </Form>
      <SectionCloseButton>
        <SubmitButtons
          onClick={() => (editGroup ? deleteGroup() : closeGroup())}
        >
          {editGroup ? "Excluir" : "Fechar"}
        </SubmitButtons>
      </SectionCloseButton>
    </ModalDefault>
  );
};

export default ModalAddGroup;
