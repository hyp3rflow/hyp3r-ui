import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IProp, WritePost } from './WritePost';

export default {
  title: 'component/WritePost',
  component: WritePost,
} as Meta;

const Template: Story<IProp> = args => (
  <WritePostLayout>
    <WritePost {...args} />
  </WritePostLayout>
);

const WritePostLayout = styled.div`
  width: 1024px;
  margin: 30px auto;
`;

export const Main = Template.bind({});
Main.args = {};
