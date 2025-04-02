import { styled } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: 6px;
  }
`;

export const PaginationButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #00000020;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  background: ${({ active }) => (active ? "#0d6efd" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
`;
