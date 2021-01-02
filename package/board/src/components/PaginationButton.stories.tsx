import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PaginationButton, IProp } from './PaginationButton';

export default {
  title: 'component/PaginationButton',
  component: PaginationButton,
  argTypes: {
    bgColor: { control: 'color' },
    color: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<IProp> = args => <PaginationButton {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
  label: 1,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  isChecked: false,
  label: 2,
};

interface IGroupProp {
  length: number;
}
export const Group: Story<IGroupProp> = args => (
  <div>
    {Array.from(Array(args.length).keys()).map((_, idx) => {
      return (
        <PaginationButton key={idx} label={idx + 1} isChecked={idx === 0} />
      );
    })}
  </div>
);
Group.args = {
  length: 10,
};
