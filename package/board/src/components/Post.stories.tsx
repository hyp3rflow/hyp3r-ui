import React from 'react';
import { IProp, Post } from './Post';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

export default {
  title: 'component/Post',
  component: Post,
} as Meta;

const Template: Story<IProp> = args => (
  <PostLayout>
    <Post {...args} />
  </PostLayout>
);

const PostLayout = styled.div`
  width: 1024px;
  margin: 30px auto;
`;

export const Default = Template.bind({});
Default.args = {
  number: 1,
  title: '블로그에 정성스럽게 글을 작성하는 법',
  content: '반갑습니다',
  view: 200,
  author: '19학번 최용욱',
  timestamp: '2021년 1월 3일 14:00',
};
