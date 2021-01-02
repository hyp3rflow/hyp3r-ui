import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, buttonProps } from './Button';

export default {
  title: 'component/Button/Button',
  component: Button,
  argTypes: {
    bgColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<buttonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: '제출',

  width: '80px',
  height: '36px',
  radius: '5px',
  bgColor: '#1EA7FD',
  color: '#fff',

  fontSize: '14px',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: '제출',

  width: '80px',
  height: '36px',
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
