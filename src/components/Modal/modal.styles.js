import { styled } from "styled-components";

export const PreviewModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 50px 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background: #00000030;
  backdrop-filter: blur(5px);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;

export const PreviewModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const CloseButton = styled.div`
  font-size: 26px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const PreviewModalContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.05);
  padding: 50px 30px;
  max-width: 768px;
  width: 95%;
  position: relative;
  height: fit-content;
  max-height: 100%;
  overflow-y: auto;
  z-index: 1;
  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  div {
    img {
      max-width: 100%;
    }
  }
`;

export const AiModalWrapper = styled.div`
  position: fixed;
  z-index: 80;
  max-width: 405px;
  width: 100%;
  word-break: break-all;
  top: 0;
  right: 30px;
  background-color: #fff;
  height: fit-content;
  min-height: 500px;
  border: 1px solid #00000030;
  border-radius: 0 0 20px 20px;
  padding: 20px;
  box-shadow: 0 0 2px 2px #00000020;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  h4 {
    span {
      font-size: 10px;
    }
  }
`;

export const ModalContainer = styled.div`
  margin-top: 30px;
`;

export const SearchItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #00000020;
  padding-bottom: 8px;
  border-radius: 5px;
  margin-bottom: 10px;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
    cursor: pointer;
  }
  p {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;

    -webkit-box-orient: vertical;
    line-height: 25px;
  }
`;

export const SearchModalWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 100px;

  /* top: ${({ top }) => top}px;
  left: ${({ left }) => left}px; */
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  background-color: #fff;
  border: 1px solid #00000050;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 0 2px 2px #00000010;
  max-width: 500px;
  width: 100%;
  height: fit-content;
  padding: 20px 25px;
  & > h1 {
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 700;
  }
  input {
    border: none;
    border-bottom: 1px solid #000;
    width: 100%;
    outline: none;
    padding: 8px;
    margin-bottom: 20px;
  }
`;

export const InsertItem = styled.div`
  padding: 8px 9px;
  cursor: pointer;
  border: 1px solid ${({ active }) => (active ? "#00000040" : "transparent")};
`;
