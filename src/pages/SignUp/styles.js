import styled from "styled-components";
import backgroundImg from "../../assets/imgLogin.svg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  text-align: center;

  Button {
    width: 100%;
  }

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK}
  }

  > H2 {
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  > a {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
    align-items: center;
    margin: 42px auto;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;