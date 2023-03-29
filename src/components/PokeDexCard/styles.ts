import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    border-radius: .5em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 300px;

    cursor: pointer;

    position: relative;


    .PokeInfo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    }

    
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    span{
        font-size: 20px;
        color: gray;
    }
    h1{
        font-size: 25px;
    }
`
export const Content = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`

