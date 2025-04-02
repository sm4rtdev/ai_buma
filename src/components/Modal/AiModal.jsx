import React, { useEffect, useState } from "react";
import { AiModalWrapper, ModalContainer, SearchItem } from "./modal.styles";
import { findRefArticles } from "../../actions";
import { Toaster, toast } from "react-hot-toast";
import { PreviewModal } from "./PreviewModal";

export const AiModal = ({ text }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState({
    id: -1,
    open: false,
  });

  useEffect(() => {
    text && getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const getData = async () => {
    setLoading(true);
    const res = await findRefArticles(text);

    setLoading(false);
    if (res.success) {
      setData(res.data);
    } else {
      toast.error("Database Connection Error!");
    }
  };

  const handlePreview = (title, content) => {
    // setPreview({ id: id, open: true });
    setPreview({ title: title, content: content, open: true });
  };

  return (
    <>
      <PreviewModal
        {...preview}
        onClose={() => setPreview({ title: "", content: "", open: false })}
      />
      <Toaster position="top-center" reverseOrder={false} />
      <AiModalWrapper open={text}>
        <h4>
          <span>Search for:</span> {text}
        </h4>
        <ModalContainer>
          {loading
            ? "Loading..."
            : data.map((item, key) => (
                <SearchItem key={key}>
                  <h1 onClick={() => handlePreview(item.title, item.content)}>
                    {item.title}
                  </h1>
                  <p>{item.plainText}</p>
                </SearchItem>
              ))}
        </ModalContainer>
      </AiModalWrapper>
    </>
  );
};
