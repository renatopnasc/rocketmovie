import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem;
  background: rgba(255, 133, 155, 0.05);
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    gap: 0.6rem;
    align-items: center;
    margin-top: 0.8rem;
    margin-bottom: 1.5rem;

    svg {
      color: #ff859b;
    }
  }

  > p {
    overflow: hidden;
    color: #999591;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 2rem;
  }
`;
