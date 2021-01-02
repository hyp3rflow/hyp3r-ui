import React from 'react';
import styled from 'styled-components';

export interface IProp extends IOption {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

interface IOption {
  hoverColor?: string;
  color?: string;
  fontWeight?: number;
  size?: string;
}

export const MenuAnchorItem = (args: IProp) => {
  return (
    <MenuAnchorItemContainer href={args.href} onClick={args.onClick}>
      {args.icon}
      <span>{args.label}</span>
    </MenuAnchorItemContainer>
  );
};

const MenuAnchorItemContainer = styled.a<IOption>`
  svg {
    width: 21px;
    height: 21px;

    margin: auto 0;
    margin-right: 5px;
  }

  * {
    vertical-align: middle;
    transition: color 0.2s ease;
    font-weight: ${p => p.fontWeight || '600'};
    font-size: ${p => p.size || '16px'};
  }

  &:hover {
    * {
      color: ${p => p.hoverColor || '#1EA7FD'};
    }
  }

  &:nth-child(n + 2) {
    margin-left: 10px;
  }
`;
