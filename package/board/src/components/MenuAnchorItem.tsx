import React from 'react';
import styled from 'styled-components';

export interface menuAnchorItemProps extends styledMenuAnchorItemProps {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

interface styledMenuAnchorItemProps {
  hoverColor?: string;
  color?: string;
  fontWeight?: number;
  size?: string;
}

export const MenuAnchorItem = (args: menuAnchorItemProps) => {
  return (
    <MenuAnchorItemContainer href={args.href} onClick={args.onClick}>
      {args.icon}
      <span>{args.label}</span>
    </MenuAnchorItemContainer>
  );
};

const MenuAnchorItemContainer = styled.a<styledMenuAnchorItemProps>`
  svg {
    width: 16px;
  }

  * {
    transition: color 0.2s ease;
    font-weight: ${p => p.fontWeight || '600'};
    font-size: ${p => p.size || '16px'};
  }

  &:hover {
    * {
      color: ${p => p.hoverColor || '#1EA7FD'};
    }
  }
`;
