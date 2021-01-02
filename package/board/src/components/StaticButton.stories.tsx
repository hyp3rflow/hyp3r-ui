import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StaticButton, staticButtonProps } from './StaticButton';

export default {
  title: 'component/Button/StaticButton',
  component: StaticButton,
  argTypes: {
    bgColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
  },
} as Meta;

const Template: Story<staticButtonProps> = args => <StaticButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: '제출',

  radius: '5px',
  bgColor: '#1EA7FD',
  color: '#fff',

  fontSize: '14px',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: '제출',

  radius: '5px',
  bgColor: '#fff',
  color: '#000',

  fontSize: '14px',
};

export const Destructive = Template.bind({});
Destructive.args = {
  label: '삭제',

  radius: '5px',
  borderColor: '#f00',
  color: '#f00',

  fontSize: '14px',
};
