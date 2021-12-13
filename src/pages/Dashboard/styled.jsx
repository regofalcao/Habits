import styled from "styled-components";

export const Conteiner  = styled.div`
    display: flex;
    justify-content: center;
    
`

export const CardsConteiner = styled.div`
    width: 90%;
    max-height: 450px;
    border: solid 2px black;
    border-radius: 5px;
    margin: 50px 0;
    padding: 3%;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 4px;       
    }
    
    ::-webkit-scrollbar-track {
        background: #c4c4c4;       
    }
    ::-webkit-scrollbar-thumb {
        background-color:#11995E;
        border-radius: 20px;       
        border: 3px solid #11995E;  
    }

    @media screen and (min-width: 650px){
        width:450px;
        max-height:580px;

        ::-webkit-scrollbar {
        width: 8px;              
        }
    }
`
export const CardHeader = styled.div`
    display:Flex;
    justify-content: space-between;
    
    p{
        font-size:25px;

    }
`
