import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

//전역 스타일을 설정하는 부분
export const GlobalStyle = createGlobalStyle `
  ${normalize}
  html {
    box-sizing: border-box;
    min-width: 320px;
    font-size: 20px;
    background-color: darkgrey;
  }
  a {
    cursor: pointer; text-decoration: none;
  }
`;