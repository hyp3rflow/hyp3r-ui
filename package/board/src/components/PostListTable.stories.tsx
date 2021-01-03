import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { PostListTable, IProp } from './PostListTable';

export default {
  title: 'component/PostListTable',
  component: PostListTable,
} as Meta;

const Template: Story<IProp> = args => <PostListTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  posts: [
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
  ],
};
