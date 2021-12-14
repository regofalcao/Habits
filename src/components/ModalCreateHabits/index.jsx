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


import CloseIcon from "@mui/icons-material/Close";

const ModalCreateHabitis = ({setOpemModal}) => {

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

    const {register, handleSubmit, formState:{errors}} = useForm(
        {resolver: yupResolver(Schema)}
    );

    const onSubmit = (date) => {
        console.log(date);
    }

    
    return <Conteiner>
        <ModalConteiner>
            <form  onSubmit = {handleSubmit(onSubmit)}>
                <Header>
                    <p>Criar novo Habito</p>
                <CloseIcon onClick = {() => setOpemModal(false)} />
                </Header>
                <TextField  fullWidth
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
                                        value = "tazer"/>
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
                                        value = "diaria"/>
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
                <ButtonConteiner>
                    <SubmitButtons greenColor type = "submit" >Salvar alterações</SubmitButtons>
                    <SubmitButtons> Excluir </SubmitButtons>
                </ButtonConteiner>
            </form>
        </ModalConteiner>
    </Conteiner>
};

export default ModalCreateHabitis;