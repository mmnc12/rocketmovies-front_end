import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 18px 0;
  }

  content {
    display: flex;
    text-align: center; 
    align-items: center;
    justify-content: space-between;

    > Button {
      display: flex;
      width: 207px;
      height: 48px;
      align-items: center;
      gap: 8px;  
    }
  }

`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  `;

  export const NewNote = styled(Link)`
    grid-area: newnote;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    font-size: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    height: 48px;
    padding: 32px;

    svg {
      margin-right: 8px;
    }
  `;