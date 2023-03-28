import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    padding: 20px;
    background-color: red;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 5px;

    color: white;

    h1{
        font-size: 30px;
    }
    svg{
        font-weight: bold;  
    }

    button{
        border: none;
        background: none;

        cursor: pointer;

        font-size: 32px;
        color: white;

        display: flex;
        align-items: center;
        justify-content: center;
    }


`