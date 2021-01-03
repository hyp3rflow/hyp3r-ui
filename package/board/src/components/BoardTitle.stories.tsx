import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { BoardTitle, IProp } from './BoardTitle';

export default {
  title: 'component/BoardTitle',
  component: BoardTitle,
} as Meta;

const Template: Story<IProp> = args => <BoardTitle {...args} />

export const Notice = Template.bind({});
Notice.args = {
  title: "공지사항"
}
