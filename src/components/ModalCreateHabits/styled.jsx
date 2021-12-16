import styled from "styled-components"

export const Conteiner = styled.div`
    position:fixed;
    background-color: rgba(0,0,0,0.3);
    width:100vw;
    height: 100vh;
    z-index:2;
    display:flex;
    align-items:center;
    justify-content: center;

`

export const ModalConteiner = styled.div`
    position:absolute;
    width:95%;
    height: 92vh;
    background-color:#FFF;
    border-radius: 10px;
    padding: 10px;
  
    form{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height:100%;
    }

    @media screen and (min-width: 650px){
        width:600px;
        height: 565px;
        padding: 30
    }
`

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    margin: 10px 0 10px 0;
  
    .divButtonRadio{
        
        display:flex;
        flex-wrap: wrap;
        justify-content:space-around;
    }
    
    @media screen and (min-width:650px){
        align-items: inherit;
        flex-direction:column;

        div{
            height: 6.6vh;
        }
       
    }
`

export const Header = styled.div`
    display:flex;
    margin: 0 0 10px 0;
    justify-content: space-between;
    height: 20px;

    p{
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow: hidden;
    }

    @media screen and (min-width: 650px){
        margin: 0 0 25px 0;
    }

`

export const ButtonConteiner = styled.div`
    justify-content:space-between;
    display:flex;
    flex-direction:column;
`

export const TitleSection = styled.div`  
        text-align:start;   
`