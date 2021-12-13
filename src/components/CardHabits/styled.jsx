import styled from "styled-components";

export const Conteiner = styled.div`

`

export const CardConteiner = styled.div`
   display: flex; 
   justify-content: space-between;
   margin: 10px 0 25px 0;

   
`    

export const IconConteiner = styled.div`
    width: 25%;
    background-color:${(props) =>   props.category.toLocaleLowerCase() === "sáude" ?
                                        "#800080" : 
                                    props.category.toLocaleLowerCase() === "esporte" ?
                                        "#C03838" :  
                                    props.category.toLocaleLowerCase() === "lazer" ?
                                        "#38C15D" : 
                                    props.category.toLocaleLowerCase() === "trabalho" ?
                                        "#4348DE" : "#8F8389" };;
    border-radius: 10px;
    display: flex;
    align-items:center;
    justify-content:center;
    height:70px;
    svg{
        color:#FFF;
        font-size:35px
    }
    @media screen and (min-width: 650px){
        height:80px;
    }

`

export const BodyConteiner = styled.div`
    height: 100%;
`

export const ConteinerDiscription = styled.div`
    display:flex;

    div{
        margin:0 5px;
        text-align:start;
    }
`
export const Name = styled.div`
    width:130px;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow: hidden;
    @media screen and (min-width: 650px){
        width:200px
    }
    `
export const Category = styled.div`
    background-color:${(props) =>   props.category.toLocaleLowerCase() === "sáude" ?
                                        "#eac7ea" : 
                                    props.category.toLocaleLowerCase() === "esporte" ?
                                        "#efd7d7" :  
                                    props.category.toLocaleLowerCase() === "lazer" ?
                                        "#daf2e0" : 
                                    props.category.toLocaleLowerCase() === "trabalho" ?
                                        "#bebfd6" : "#e5e5e5" };
    color:${(props) =>   props.category.toLocaleLowerCase() === "sáude" ?
                                        "#800080" : 
                                    props.category.toLocaleLowerCase() === "esporte" ?
                                        "#C03838" :  
                                    props.category.toLocaleLowerCase() === "lazer" ?
                                        "#38C15D" : 
                                    props.category.toLocaleLowerCase() === "trabalho" ?
                                        "#4348DE" : "#8F8389" };
    max-inline-size: fit-content;
    padding:0 10px;
    font-size:14px;
    border-radius:5px;
    
`

export const Bar = styled.div`
    background-color:#C4C4C4;
    width:100%;
    margin: 10px 0 0 0;
    height: 15px;
    border-radius:3.5px;
    position:relative;
    `

export const ProgressBar = styled.div`
    width: ${props => props.progress}%;
    background-color:${(props) =>   props.category.toLocaleLowerCase() === "sáude" ?
                                        "#800080" : 
                                    props.category.toLocaleLowerCase() === "esporte" ?
                                        "#C03838" :  
                                    props.category.toLocaleLowerCase() === "lazer" ?
                                        "#38C15D" : 
                                    props.category.toLocaleLowerCase() === "trabalho" ?
                                        "#4348DE" : "#8F8389" };
    height: 100%;
    border-radius:4px;
    font-size:15px;

    p{
        text-align:center;
    }

`

export const CheckinConteiner = styled.i`
    font-size:15px;
    svg{
        font-size:40px;
        color:${(props) =>   props.category.toLocaleLowerCase() === "sáude" ?
                                        "#800080" : 
                                    props.category.toLocaleLowerCase() === "esporte" ?
                                        "#C03838" :  
                                    props.category.toLocaleLowerCase() === "lazer" ?
                                        "#38C15D" : 
                                    props.category.toLocaleLowerCase() === "trabalho" ?
                                        "#4348DE" : "#8F8389" };
    }
    @media screen and (min-width: 650px){
        svg{
            font-size:50px
        }
    }
`