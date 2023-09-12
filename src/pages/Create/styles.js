import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    padding-inline: 12.3rem;
  }
`;

export const Form = styled.form`
  margin-top: 4rem;
  grid-area: content;

  > header a {
    color: #ff859b;
    font-size: 1.6rem;
    margin-bottom: 2.4rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-height: 70vh;
    overflow-y: auto;

    padding-right: 1.6rem;

    &::-webkit-scrollbar {
      background: transparent;
      width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ff859b; /* Cor de fundo do polegar */
      border-radius: 6px; /* Borda arredondada do polegar */
    }

    > h1 {
      font-size: 3.6rem;
      font-weight: 500;
      color: #f4ede8;
    }

    > section {
      h2 {
        color: #999591;
        font-size: 2rem;
        font-weight: normal;
        margin-bottom: 2.4rem;
      }
    }

    .tags-container {
      width: 100%;
      background: #0d0c0f;
      border-radius: 0.8rem;
      padding: 1.6rem;

      display: flex;
      align-items: center;
      gap: 2.4rem;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 4rem;
    }
  }

  .movie-info {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
`;
