import { styled } from "styled-components";

export const AppLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f8fb;
`;

export const AppContainer = styled.div`
  max-width: 768px;
  width: 95%;
  margin: auto;
  padding: 50px 0;
  display: flex;
  flex: 1;
`;

export const AppHeaderWrapper = styled.div`
  width: 100%;
  background: #fff;
`;

export const AppHeaderContainer = styled.div`
  max-width: 768px;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
`;
