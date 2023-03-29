import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: white;
    color: black;
    margin-bottom: 8px;
    border-radius: 10px;
    border: 1px solid gray;

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        color: gray;
        background: transparent;
        border: 0;
        &:placeholder{
            color: gray;
        }
    }
    > svg{
           margin-left: 16px;
        }
`
