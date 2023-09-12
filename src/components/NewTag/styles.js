import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  background: ${({ $isnew }) =>
    $isnew === "true" ? "transparent" : "#262529"};

  border: ${({ $isnew }) =>
    $isnew === "true" ? `1px dashed #948F99` : "none"};

  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;

    display: flex;
  }

  .button-delete {
    color: #ff859b;
  }

  .button-add {
    color: #ff859b;
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;
    color: #fff;
    background: transparent;
    border: none;

    &::placeholder {
      color: #948f99;
    }
  }
`;
