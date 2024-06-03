import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  Button {
    width: 100%;
  }

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    display: flex;
    align-items: center;
    

    padding: 0 124px;

    a {
      display: flex;
    }

    span {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-left: 8px;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 24px;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 157px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`;


export const Avatar = styled.div`
  position: relative;
  margin: -250px auto 32px;

  height: 186px;
  width: 186px;

  > img {
    height: 186px;
    width: 186px;

    border-radius: 50%;
  } 

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 18px;
      height: 15px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
  }
`;