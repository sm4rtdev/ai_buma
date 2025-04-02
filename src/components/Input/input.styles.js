import { styled } from "styled-components";

export const InputWrapper = styled.div`
  p {
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
  }
  input {
    border: 1px solid ${({ iserror }) => (iserror ? "#FF0000" : "#000000")};
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    height: 40px;
    width: 100%;
    border-radius: 4px;
    padding: 0 16px;
  }
  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 24px;
    color: #ff0000;
  }
`;
