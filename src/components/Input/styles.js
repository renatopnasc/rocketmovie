import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #262529;
  display: flex;
  align-items: center;

  padding-left: 2rem;
  height: 5.6rem;
  border-radius: 1rem;

  > input {
    background: transparent;
    border: none;
    width: 100%;

    height: 100%;
    font-size: 1.4rem;
  }

  > svg {
    color: #948f99;
    margin-right: 1.8rem;
  }
`;
