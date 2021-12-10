import ModalDefault from "../ModalDefault";

import { useOpenModal } from "../../providers/OpenModal";

import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { Form, Button, Header, SectionButton } from "./styles";

import ButtonRadio from "../ButtonRadio";

const ModalAddGroup = () => {
  const { modalOpen, handleModal } = useOpenModal();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <ModalDefault isOpen={modalOpen} setIsOpen={handleModal}>
      <Header>
        <h2>Cadastrar Grupo</h2>
        <CloseIcon />
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="Nome do grupo" />
        <TextField label="Descrição do grupo" multiline rows={4} />

        <h3>Selecionar Categoria:</h3>
        <section>
          <ButtonRadio
            register={register}
            text="Esporte"
            name="categoria"
            value="esporte"
          />
          <ButtonRadio
            register={register}
            text="Saúde"
            name="categoria"
            value="saude"
          />
          <ButtonRadio
            register={register}
            text="Lazer"
            name="categoria"
            value="lazer"
          />
          <ButtonRadio
            register={register}
            text="Trabalho"
            name="categoria"
            value="trabalho"
          />
        </section>

        <SectionButton>
          <Button greenColor>Salvar alterações</Button>
          <Button>Excluir</Button>
        </SectionButton>
      </Form>
    </ModalDefault>
  );
};

export default ModalAddGroup;
