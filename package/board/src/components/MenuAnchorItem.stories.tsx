import React from 'react';
import { BiChalkboard } from 'react-icons/bi';
import { MdAnnouncement } from 'react-icons/md';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuAnchorItem, IProp } from './MenuAnchorItem';

export default {
  title: 'component/MenuAnchorItem',
  component: MenuAnchorItem,
  argTypes: {
    hoverColor: { control: 'color' },
    color: { control: 'color' },
    onClick: { action: 'clicked' },
    fontWeight: { control: 'number' },
  },
} as Meta;

const Template: Story<IProp> = args => <MenuAnchorItem {...args} />;

export const Board = Template.bind({});
Board.args = {
  label: '게시판',
  icon: <BiChalkboard />,
};

export const Notice = Template.bind({});
Notice.args = {
  label: '공지사항',
  icon: <MdAnnouncement />,
};
