import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PaginationButton, paginationButtonProps } from './PaginationButton';

export default {
  title: 'component/PaginationButton',
  component: PaginationButton,
  argTypes: {
    bgColor: { control: 'color' },
    color: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<paginationButtonProps> = args => (
  <PaginationButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: '1',
};
