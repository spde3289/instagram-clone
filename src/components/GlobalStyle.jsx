import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    background: rgba(216, 216, 216, 0.171);
    margin: 0;
  };

  ul, li {
    text-decoration: none;
    list-style:none;
    padding-left:0px;
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