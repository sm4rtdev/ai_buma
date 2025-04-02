import { styled } from "styled-components";

export const AuthContainer = styled.div`
  background: #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 125%;
    margin-bottom: 25px;
  }
  & > h4 {
    margin-top: 25px;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    span {
      cursor: pointer;
      font-weight: 700;
    }
  }
`;

export const AuthFormGroup = styled.div`
  width: 100%;

  margin-bottom: 25px;

  & > :not(:first-child) {
    margin-top: 16px;
  }
`;
