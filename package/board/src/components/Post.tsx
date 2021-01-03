import React from 'react';
import styled from 'styled-components';
import { Viewer } from '@toast-ui/react-editor';

export interface IProp {
  number: number;
  title: string;
  content: string;
  view: number;
  author: string;
  timestamp: string;
}

export const Post = (args: IProp) => {
  return (
    <PostContainer>
      <MetaContainer>
        <Title>{args.title}</Title>
        <div>
          {args.author}
          <Timestamp>
            {args.timestamp} / 조회수: {args.view}
          </Timestamp>
        </div>
      </MetaContainer>
      <Viewer initialValue={args.content} />
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 3px solid #1ea7fd;
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 0;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Timestamp = styled.span`
  margin-left: 10px;
  color: #888;
`;
