import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};

  border: none;
  border-radius: 16px;
  padding: 32px;
  margin-top: 16px;

  > div {
    display: grid;
    align-items: left;
    justify-content: start;
    text-align: left;
    > h1 {
      //flex: 1;
      text-align: left;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 8px;
      color: ${({theme}) => theme.COLORS.WHITE_200};
    }
  }


  > footer {
    text-align: left;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: justify;
    margin-top: 15px;
  }

  > Icon {
    size: 10px;
  }
`;
