import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: rgba(216, 216, 216, 0.171);
    margin: 0;
  };

  h2, p {
    margin: 0;
  };

  h2 {
    font-size: 1.5rem;
  };

  p {
    font-size: 1rem;
  };

`;

export default GlobalStyle;