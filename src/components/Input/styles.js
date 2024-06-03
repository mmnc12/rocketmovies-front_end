import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE_300};

  margin-bottom: 8PX;
  border-radius: 10PX;

  > Input {
    height: 56px;
    width: 100%;

    padding: 19px 24px;
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > svg {
      margin-left: 16px;
    }
`;