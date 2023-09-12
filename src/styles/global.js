import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 62.5%;
  }

  body{
    background: #1C1B1E;
  }

  body, input, button, a, textarea {
    font-size: 1.6rem;
    color: #F4EDE8;
    outline: none;
    font-family: 'Roboto Slab', serif;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    :root {
      font-size: 46.875%;
    }
  }

`;
