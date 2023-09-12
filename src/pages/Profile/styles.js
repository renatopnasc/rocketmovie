import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 14.4rem;
    background: rgba(255, 133, 155, 0.05);

    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #ff859b;
      font-size: 1.6rem;
      margin-left: 14.4rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  height: 33.6rem;

  margin: 0 auto;

  > div:first-child {
    margin-bottom: 6.4rem;
  }

  > div {
    margin-bottom: 0.8rem;
  }

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > button {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -10rem auto 6.4rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background: #ff859b;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: black;
    }
  }
`;
