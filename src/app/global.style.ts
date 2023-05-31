import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans';
    font-style: normal;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  body {
    background-color: var(--background);
    min-height: 100vh;
    width: 100vw;
  }

  :root {
    font-size: 62.5%;  // 10px

    --text-primary: #202020;
    --text-secondary: #FFF;
    --background: #FBFBFB;
    --card-border: #CCC;

    --gradient-primary-color: rgba(161, 28, 243, 0.6);
    --gradient-secondary-color: rgba(216, 53, 197, 0.6);

    position: relative;
  }
`;