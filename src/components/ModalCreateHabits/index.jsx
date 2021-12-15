import {Conteiner,
        ModalConteiner, 
        Section, 
        ButtonConteiner, 
        Header,
        TitleSection} from "./styled";
    
import ButtonRadio from "../ButtonRadio";
import SubmitButtons from "../SubmitButtons";
import { TextField } from "@mui/material";

import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUser } from "../../providers/User";

import CloseIcon from "@mui/icons-material/Close";

const ModalCreateHabitis = ({setOpemModal, setEditiHabits, editHabits}) => {

    const {deleteHabit, createNewHabit, updateHabit} = useUser();

    const Schema = yup.object().shape({
        title: yup.string().required("Nome do Habito obrigatório"),
        category: yup
            .string()
            .required("Categoria do grupo obrigatória")
            .nullable(),
        difficulty: yup
            .string()
            .required("Categoria do grupo obrigatória")
            .nullable(),
        frequency: yup
            .string()
            .required("Categoria do grupo obrigatória")
            .nullable(),
    });

    const {register, handleSubmit, formState:{errors}, reset} = useForm(
        {resolver: !editHabits && yupResolver(Schema)}
    );

    const onSubmit = (date) => {
        reset();

        console.log(date);

        if (!editHabits){
            createNewHabit(date);
        };

        if (editHabits) {
            if (date.title === ""){
                delete date.title;
            };
            if (date.category === null){
                delete date.category;
            };
            if (date.difficulty === null){
                delete date.difficulty;
            };
            if (date.frequency === null){
                delete date.frequency;
            };
            updateHabit(date, editHabits[0]);
        };
        closeEditiHabits()
    };

    
    const deleteHabtisFunction = () => {
        deleteHabit(editHabits[0]);
        closeEditiHabits();
    };

    const closeEditiHabits = () => {
        setOpemModal(false);
        setEditiHabits('');
    };

    return <Conteiner>
        <ModalConteiner>
            <form  onSubmit = {handleSubmit(onSubmit)}>
                <Header>
                    {editHabits ? 
                        <p>Editar hábito: {editHabits[1].slice(0,1).toUpperCase().concat(editHabits[1].slice(1))}</p>
                        :
                        <p>Criar novo Habito</p>
                    }
                <CloseIcon onClick = {closeEditiHabits} />
                </Header>
                <TextField  fullWidth
                            size = "small"
                            {...register("title")}
                            label = "Nome Do Habito" 
                            error={!!errors.title}
                            helperText = {errors.title?.message}/>            

                <Section>
                    <TitleSection>
                        <p>Categoria:</p>
                    </TitleSection>
                    <div>                        
                        <ButtonRadio    register = {register}
                                        text = "Saúde"
                                        name = "category"
                                        value = "saúde"/>
                        <ButtonRadio   register = {register}
                                        text = "Esporte"
                                        name = "category"
                                        value = "esporte"/>
                        <ButtonRadio    register = {register}
                                        text = "Lazer"
                                        name = "category"
                                        value = "lazer"/>
                        <ButtonRadio    register = {register}
                                        text = "Trabalho"
                                        name = "category"
                                        value = "trabalho"/>                
                    </div>                
                </Section>

                <Section>
                    <TitleSection>
                        <p>Dificuldade:</p>
                    </TitleSection>
                    <div>
                        <ButtonRadio    register = {register}
                                        text = "Fácil"
                                        name = "difficulty"
                                        value = "fácil"/>
                        <ButtonRadio    register = {register}
                                        text = "Médio"
                                        name = "difficulty"
                                        value = "médio"/>
                        <ButtonRadio    register = {register}
                                        text = "Difícil"
                                        name = "difficulty"
                                        value = "difícil"/>
                    </div>                
                </Section>
                <Section>
                    <TitleSection>Frequência:</TitleSection>
                    <div>   
                        <ButtonRadio    register = {register}
                                        text = "Diaria"
                                        name = "frequency"
                                        value = "diária"/>
                        <ButtonRadio    register = {register}
                                        text = "Semanal"
                                        name = "frequency"
                                        value = "semanal"/>
                        <ButtonRadio    register = {register}
                                        text = "Mensal"
                                        name = "frequency"
                                        value = "mensal"/>
                        <ButtonRadio    register = {register}
                                        text = "Anual"
                                        name = "frequency"
                                        value = "anual"/>
                    </div>                
                </Section>        
                {!editHabits ? 
                    <ButtonConteiner>
                        <SubmitButtons  greenColor 
                                        type = "submit" >Criar Hábito
                        </SubmitButtons>
                    </ButtonConteiner>
                    :
                    <ButtonConteiner>
                        <SubmitButtons  greenColor 
                                        type = "submit" >Atualizar Hábito
                        </SubmitButtons>
                        <SubmitButtons type = "button" 
                                        onClick = {deleteHabtisFunction}>Deletar
                        </SubmitButtons>
                    </ButtonConteiner>
                    }
            </form>
        </ModalConteiner>
    </Conteiner>
};

export default ModalCreateHabitis;