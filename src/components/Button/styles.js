import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;
  background: ${({ $ondelete }) =>
    $ondelete === "true" ? "#0D0C0F" : " #ff859b"};
  border: none;
  color: ${({ $ondelete }) => ($ondelete === "true" ? "#FF859B" : "#312e38")};
  border-radius: 1rem;
`;
