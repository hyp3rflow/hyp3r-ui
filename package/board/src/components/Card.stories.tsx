import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Card, cardProps } from './Card';

export default {
  title: 'component/Card',
  component: Card,
} as Meta;

const Template: Story<cardProps> = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
