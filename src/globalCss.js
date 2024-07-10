import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.snowWhite};
    color: ${(props) => props.theme.dark};
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }
  .noscroll {
    overflow: hidden;
  }
  .serif {
    font-family: Georgia, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyle;
