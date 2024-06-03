import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  border: none;
  background-color: transparent;
  width: 70px;

  svg {
    color: ${({ theme}) => theme.COLORS.PINK};
  }

  span {
    color: ${({ theme}) => theme.COLORS.PINK};
    font-size: 16px;
    margin-left: 8px;
  }
`;