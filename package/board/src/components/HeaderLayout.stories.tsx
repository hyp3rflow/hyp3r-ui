import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  HeaderAnchorGroup,
  HeaderLayout,
  HeaderLogo,
  HeaderProfileGroup,
} from './HeaderLayout';
import { MenuAnchorItem } from './MenuAnchorItem';
import { Board, Notice } from './MenuAnchorItem.stories';

export default {
  title: 'component/HeaderLayout',
  component: HeaderLayout,
} as Meta;

export const Header: Story = () => {
  return (
    <HeaderLayout>
      <HeaderLogo />
      <HeaderAnchorGroup>
        <MenuAnchorItem {...Notice.args} />
        <MenuAnchorItem {...Board.args} />
      </HeaderAnchorGroup>
      <HeaderProfileGroup>
        <MenuAnchorItem label="프로필" />
        <MenuAnchorItem label="로그아웃" />
      </HeaderProfileGroup>
    </HeaderLayout>
  );
};
