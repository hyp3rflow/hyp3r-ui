import React, { createRef, useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import { Button } from './Button';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

export interface IProp {
  onSubmit: () => void;
}

export const WritePost = (args: IProp) => {
  const [title, setTitle] = useState('');
  const editorRef = createRef<Editor>();

  const handleSubmit = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };

  return (
    <WritePostContainer>
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Editor
        ref={editorRef}
        previewStyle="vertical"
        initialEditType="wysiwyg"
        placeholder="본문을 입력하세요."
        height="600px"
      />
      <Button label="작성 완료" onClick={handleSubmit} />
    </WritePostContainer>
  );
};

const TitleInput = styled.input`
  height: 60px;
  font-size: 20px;

  border: none;
  outline: 0;
`;

const WritePostContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 3px solid #1ea7fd;
`;
