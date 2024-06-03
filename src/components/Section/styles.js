import styled from "styled-components";

export const Container = styled.section`

  > div {
    margin: 45px 0;
    //display: flex;
    //align-items: center;
    > h2 {
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      font-size: 36px;
      font-weight: 400;
      margin-right: 19px;
    }
  }
`;