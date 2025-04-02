import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { Toaster, toast } from "react-hot-toast";
import jwt_decode from "jwt-decode";
import { EditorLayout } from "../../layouts";
import {
  EditorHeaderContainer,
  EditorHeaderWrapper,
  EditorTitle,
  EditorWrapper,
} from "./new.styles";
import { Button, PreviewModal, SearchModal, AiModal } from "../../components";
import { ButtonGroup } from "../welcome/welcome.styles";
import { useAuthContext } from "../../context";
import { newArticle } from "../../actions";

export const NewArticlePage = () => {
  const navigate = useNavigate();
  const { authContext } = useAuthContext();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");
  const [aiModal, setAiModal] = useState("");
  const [preview, setPreview] = useState({
    title: "",
    content: "",
    open: false,
  });
  const [searchModal, setSearchModal] = useState({
    top: 0,
    left: 0,
    open: false,
  });
  const [content, setContent] = useState({ html: "", plainText: "" });

  const handleGetSelectedText = () => {
    if (window.getSelection()) {
      let range = window.getSelection();
      setAiModal(range?.toString().trim() ? range?.toString().trim() : "");
    }
  };

  const handleContentStateChange = (e) => {
    // console.log("as HTML:", htmlToDraft(draftToHtml(e)));
    // console.log("as HTML:", draftToHtml(e));
    // console.log(typeof draftToHtml(e));
    setContent({
      html: draftToHtml(e),
      plainText: editorState.getCurrentContent().getPlainText(),
    });
    setTimeout(() => {
      const plainText = editorState.getCurrentContent().getPlainText();
      if (plainText[plainText.length - 1] === "/") {
        const elem = document
          .getSelection()
          ?.focusNode?.parentElement?.getBoundingClientRect();
        setSearchModal({
          top: Number(elem?.top) + Number(elem?.height),
          left: Number(elem?.left) + Number(elem?.width),
          open: true,
        });
      } else {
        setSearchModal((prev) => ({
          ...prev,
          open: false,
        }));
      }
    }, 1000);
  };

  const handlePublish = async () => {
    if (!title) {
      toast.error("Enter the Title");
    } else if (!content.plainText) {
      toast.error("Edit the Content");
    } else {
      const user = jwt_decode(authContext.user);
      const newData = {
        title: title,
        content: content.html,
        plainText: content.plainText,
        userid: user.id,
      };
      const res = await newArticle(newData);
      if (res.success) {
        toast.success(res.message);
        navigate("/home");
      } else {
        toast.error(res.message);
      }
    }
  };

  const handlePreview = () => {
    setPreview({ title: title, content: content.html, open: true });
  };

  return (
    <EditorLayout>
      <Toaster position="top-center" reverseOrder={false} />
      <EditorHeaderWrapper>
        <EditorHeaderContainer>
          <Button
            className="publish-button"
            onClick={() =>
              window.confirm("It will be not saved, is that okay?") &&
              navigate("/home")
            }
          >
            Back
          </Button>
          <ButtonGroup>
            <Button className="publish-button" onClick={handlePreview}>
              Preview
            </Button>
            <Button className="publish-button" onClick={handlePublish}>
              Publish
            </Button>
          </ButtonGroup>
        </EditorHeaderContainer>
      </EditorHeaderWrapper>
      <EditorWrapper onClick={handleGetSelectedText}>
        <EditorTitle
          value={title}
          placeholder="Enter the Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
          onContentStateChange={handleContentStateChange}
        />
      </EditorWrapper>
      <AiModal text={aiModal} />
      <SearchModal {...searchModal} />
      <PreviewModal
        {...preview}
        onClose={() => setPreview({ title: "", content: "", open: false })}
      />
    </EditorLayout>
  );
};
