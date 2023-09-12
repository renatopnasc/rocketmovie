import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    padding-inline: 12.3rem;
    width: 100%;

    overflow-y: auto;
  }
`;

export const Content = styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.8rem;

    h2 {
      font-size: 3.2rem;
      font-weight: 400;
    }
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-height: 48rem;
    padding-right: 0.8rem;

    overflow-y: auto;

    &::-webkit-scrollbar {
      background: transparent;
      width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ff859b; /* Cor de fundo do polegar */
      border-radius: 6px; /* Borda arredondada do polegar */
    }
  }
`;

export const Button = styled(Link)`
  background: #ff859b;
  color: #1c1b1e;
  padding: 1.4rem 3.2rem;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
