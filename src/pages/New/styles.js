import styled from "styled-components";

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
    padding: 0;
  }


  .tags {
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    border-radius: 10px;
    height: auto;
    align-items: center;
    padding: 16px;
    gap: 20px;
    flex-wrap: wrap;
  }
  
`;

export const Form = styled.form`
  max-width: 1137px;
  margin: 38px auto;

  > header {
    display: grid;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    > h1 {
      margin-top: 24px;
    }
  }

  > div {
    display: flex;
    gap: 40px;
    margin-bottom: 30px;
    
    

    .bt1 {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      color: ${({ theme }) => theme.COLORS.PINK};
  
    }
  }

  > Section {
    h2 {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin-top: 40px;
      margin-bottom: 24px;
    }
  }
`;