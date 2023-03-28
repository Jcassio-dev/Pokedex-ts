import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font-size: 16;
    font-family: roboto;
    outline: none;
  }

`