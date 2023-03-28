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

        position: relative;
    }
    button span{
        position: absolute;
        top: 0px;
        right: 0px;

        font-size: 10px;
        padding: 5px;
        border-radius: 50px;

        background-color: white;
        color: red;


    }


`