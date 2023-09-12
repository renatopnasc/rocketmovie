import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 6.4rem;

  padding-inline: 12.3rem;

  border-bottom: 1px solid #3e3b47;

  > h1 {
    font-size: 2.4rem;
    color: #ff859b;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    strong {
      font-size: 1.4rem;
      color: #f4ede8;
    }

    button {
      background: none;
      border: none;
      color: #948f99;
      font-size: 1.4rem;
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
