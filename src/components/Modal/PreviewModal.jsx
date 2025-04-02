import React, { useEffect, useState } from "react";
import {
  CloseButton,
  PreviewModalContent,
  PreviewModalOverlay,
  PreviewModalWrapper,
} from "./modal.styles";
import { useArticleContext } from "../../context";

export const PreviewModal = ({ id = -1, title, content, open, onClose }) => {
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const { articleContext } = useArticleContext();

  useEffect(() => {
    if (id < 0) {
      setModalContent({ title: title, content: content });
    } else {
      const data = articleContext.filter((f) => f.id === id)[0];
      setModalContent({ title: data.title, content: data.content });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <PreviewModalWrapper open={open ? "true" : undefined}>
      <PreviewModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h1>{modalContent.title ? modalContent.title : "No Title"}</h1>
        {modalContent.content ? (
          <div dangerouslySetInnerHTML={{ __html: modalContent.content }} />
        ) : (
          "No Content"
        )}
      </PreviewModalContent>
      <PreviewModalOverlay onClick={onClose} />
    </PreviewModalWrapper>
  );
};
