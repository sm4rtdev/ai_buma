import { styled } from "styled-components";

export const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const HomeTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const ArticleFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  border-bottom: 2px solid #00000010;
  & > :not(:first-child) {
    margin-left: 16px;
  }
`;

export const FilterOption = styled.div`
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 2px solid ${({ active }) => (active ? "#000" : "transparent")};
  margin-bottom: -2px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  span {
    color: #64748b;
  }
`;

export const ArticleTableWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.05);
  padding: 5px 10px;
  margin-top: 30px;
  input {
    width: 16px;
    height: 16px;
    accent-color: #000;
  }
  table {
    width: 100%;
  }
  th {
    font-weight: 700;
  }
  td,
  th {
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    padding: 10px 20px;
  }
  td.checkbox {
    width: 5%;
  }
  td.title {
    width: 40%;
    span {
      cursor: pointer;
      color: #0000ff;
    }
  }
  td.status {
    width: 10%;
  }
  td.date {
    width: 25%;
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
