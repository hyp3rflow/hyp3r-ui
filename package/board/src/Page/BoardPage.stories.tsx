import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PostListTable } from '../components/PostListTable';
import { BoardTitle } from '../components/BoardTitle';
import { Group } from '../components/PaginationButton.stories';
import { Header } from '../components/HeaderLayout.stories';
import styled from 'styled-components';
import { Button } from '../components/Button';

export default {
  title: 'document/BoardPage',
} as Meta;

export const Board: Story = () => {
  return (
    <>
      <Header />
      <Layout>
        <PageLayout>
          <BoardTitle title="공지사항" />
          <PostListTable posts={posts} />
          <Button label="글 작성" bgColor="#1EA7FD" color="#fff" />
          <Group length={10} />
        </PageLayout>
      </Layout>
    </>
  );
};

const PageLayout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Layout = styled.div`
  width: 100vw;
  min-width: 1024px;
  margin-top: 100px;
`;

const posts = [
  {
    number: 3,
    title: '안녕하세요',
    reply: 5,
    like: 30,
    view: 30,
    author: '최용욱',
    timestamp: '10일 전',
  },
  {
    number: 20,
    title: '안녕하세요',
    reply: 5,
    like: 30,
    view: 30,
    author: '최용욱',
    timestamp: '230일 전',
  },
  {
    number: 3,
    title: '안녕하세요',
    reply: 5,
    like: 30,
    view: 30,
    author: '최용욱',
    timestamp: '10일 전',
  },
  {
    number: 20,
    title: '안녕하세요',
    reply: 5,
    like: 30,
    view: 30,
    author: '최용욱',
    timestamp: '230일 전',
  },
  {
    number: 3,
    title: '안녕하세요',
    reply: 5,
    like: 30,
    view: 30,
    author: '최용욱',
    timestamp: '10일 전',
  },
  {
    number: 20,
    title: '안녕하세요',
    reply: 5,
    like: 30,
    view: 30,
    author: '최용욱',
    timestamp: '230일 전',
  },
  {
    number: 3,
    title: '안녕하세요',
    reply: 5,
    like: 30,
    view: 30,
    author: '최용욱',
    timestamp: '10일 전',
  },
  {
    number: 20,
    title: '안녕하세요',
    reply: 5,
    like: 30,
    view: 30,
    author: '최용욱',
    timestamp: '230일 전',
  },
  {
    number: 3,
    title: '안녕하세요',
    reply: 5,
    like: 30,
    view: 30,
    author: '최용욱',
    timestamp: '10일 전',
  },
  {
    number: 20,
    title: '안녕하세요',
    reply: 5,
    like: 30,
    view: 30,
    author: '최용욱',
    timestamp: '230일 전',
  },
];
