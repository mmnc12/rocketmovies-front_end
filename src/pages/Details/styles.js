import styled from 'styled-components';

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
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  
  > p {
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 40px;
    text-align: justify;
  }

  .star {
    display: flex;
    align-items: center;

    > Section {
      align-items: center;
    }
  }

  strong {
    display: flex;
    font-size: 28px;
    padding-top: 10px;
  }

  span {
    margin-top: -18px;
    margin-bottom: 10px;
    > img {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      margin-right: 1.5px;
    }
  }
`;