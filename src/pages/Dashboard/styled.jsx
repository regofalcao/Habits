import styled from "styled-components";

export const Conteiner  = styled.div`
    display: flex;
    justify-content: center;
    
`

export const CardsConteiner = styled.div`
    width: 95%;
    height: 660px;
    border: solid 1px black;
    border-radius: 5px;
    margin: 15px 0 ;
    padding: 2% 3%;
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

    @media screen and (min-width: 900px){
        width:60%;
        max-height:580px;
        margin: 50px 0 0 208px;
        padding: 2% 10%;

        ::-webkit-scrollbar {
        width: 8px;              
        }
    }
`
export const CardHeader = styled.div`    
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 20px 0;
    p {
        font-weight: bold;
        color: var(--black);
        font-size: 1.2rem;
    }

    > div {
        background-color: var(--color-secundary);
        border-radius: 5px;
        box-sizing: border-box;
        color: var(--light-gray);
        width: 40px;
        font-size: 28px;
        padding: 0 2px;
        cursor: pointer;
    }
    
`
