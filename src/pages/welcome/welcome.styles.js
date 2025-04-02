import { styled } from "styled-components";

export const WelcomePageWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.05);
  max-width: 591px;
  margin: auto;
  padding: 60px 30px;
  text-align: center;
  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 34px 0 41px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .home-action-button {
    width: 100px;
  }

  & > :not(:first-child) {
    margin-left: 16px;
  }
`;
