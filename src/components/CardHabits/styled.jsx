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
    max-width:80px;
    background-color:${(props) =>   props.category.toLocaleLowerCase() === "saúde" ?
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
    :hover{
        opacity:0.8;
    }
    @media screen and (min-width: 900px){
        height:80px;
        width:18%
    }

`

export const BodyConteiner = styled.div`
    height: 100%;
    width:70%;
`

export const ConteinerDiscription = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
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
    
    `
export const Category = styled.div`
    background-color:${(props) =>   props.category.toLocaleLowerCase() === "saúde" ?
                                        "#eac7ea" : 
                                    props.category.toLocaleLowerCase() === "esporte" ?
                                        "#efd7d7" :  
                                    props.category.toLocaleLowerCase() === "lazer" ?
                                        "#daf2e0" : 
                                    props.category.toLocaleLowerCase() === "trabalho" ?
                                        "#bebfd6" : "#e5e5e5" };
    color:${(props) =>   props.category.toLocaleLowerCase() === "saúde" ?
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
    :hover{
        opacity:0.8;
    }
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
    background-color:${(props) =>   props.category.toLocaleLowerCase() === "saúde" ?
                                        "#800080" : 
                                    props.category.toLocaleLowerCase() === "esporte" ?
                                        "#C03838" :  
                                    props.category.toLocaleLowerCase() === "lazer" ?
                                        "#38C15D" : 
                                    props.category.toLocaleLowerCase() === "trabalho" ?
                                        "#4348DE" : "#8F8389" };
    height: 100%;
    border-radius:4px;
    font-size:12px;

    p{
        text-align:center;
    }
    :hover{
        opacity:0.8;
    }
`

export const CheckinConteiner = styled.i`
    font-size:15px;
    svg{
        font-size:40px;
        color:${(props) =>   props.category.toLocaleLowerCase() === "saúde" ?
                                        "#800080" : 
                                    props.category.toLocaleLowerCase() === "esporte" ?
                                        "#C03838" :  
                                    props.category.toLocaleLowerCase() === "lazer" ?
                                        "#38C15D" : 
                                    props.category.toLocaleLowerCase() === "trabalho" ?
                                        "#4348DE" : "#8F8389" };
    }
    :hover{
        opacity:0.8;
    }
    @media screen and (min-width: 900px){
        svg{
            font-size:50px
        }
    }
`