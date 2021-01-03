import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { IntroTitle, IProp } from './IntroTitle';

export default {
  title: 'component/Intro/IntroTitle',
  component: IntroTitle,
} as Meta;

const Template: Story<IProp> = args => <IntroTitle {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: 'KUICS',
  description: 'Korea University Institute of Computer Security',
};
