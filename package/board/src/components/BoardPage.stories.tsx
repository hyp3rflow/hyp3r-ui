import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PostListTable } from './PostListTable';
import { BoardTitle } from './BoardTitle';
import { Group } from './PaginationButton.stories';

export default {
  title: 'document/Page',
} as Meta;

export const Board: Story = () => {
  return (
    <div>
      <BoardTitle title="공지사항" />
      <PostListTable posts={posts} />
      <Group length={10} />
    </div>
  );
};

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
