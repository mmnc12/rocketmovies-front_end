import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  justify-content: space-between;

  padding: 24px 123px;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    align-items: center;
    padding-top: 12px;
    margin-right: 64px;
  }

  article {
    display: grid;
    width: auto;
    margin-left: 64px;
    margin-right: 9px;
    text-align: right;
    

    .link {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      border: none;
      background-color: transparent;
      width: 26px;
      height: 18px;
      text-align: right;
      margin-left: 100px;
    }
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
    margin-left: 9px;
  }
`;
