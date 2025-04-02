import styled from "styled-components";

export const EditorWrapper = styled.div`
  height: 100%;
  width: 95%;
  margin: auto;
  padding: 30px 0;

  .editorClassName {
    border: 1px solid #00000010;
    min-height: 300px;
  }
  .wrapperClassName {
  }
`;

export const EditorHeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #00000020;

  .publish-button {
    width: 200px;
  }
`;

export const EditorHeaderContainer = styled.div`
  width: 95%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EditorTitle = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 30px;
  line-height: 34px;
  font-weight: 700;
  margin-bottom: 30px;
`;
