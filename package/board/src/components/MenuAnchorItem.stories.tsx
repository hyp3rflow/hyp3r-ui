import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MenuAnchorItem, menuAnchorItemProps } from './MenuAnchorItem';

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

const Template: Story<menuAnchorItemProps> = args => (
  <MenuAnchorItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: '게시판',
};