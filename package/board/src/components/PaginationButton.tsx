import React from 'react';
import styled from 'styled-components';

interface IOption {
  bgColor?: string;
  color?: string;
}

export interface IProp extends IOption {
  isChecked?: boolean;
  label?: number;
  onClick?: () => void;
  href?: string;
}

export const PaginationButton = (args: IProp) => {
  return (
    <StyledPaginationButton onClick={args.onClick} href={args.href} {...args}>
      {args.label}
    </StyledPaginationButton>
  );
};

const StyledPaginationButton = styled.a<IProp>`
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  line-height: 20px;
  padding: 4px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;

  background-color: ${p => (p.isChecked ? p.bgColor || '#1EA7FD' : '#fff')};
  color: ${p => (p.isChecked ? p.color || '#fff' : '#000')};

  &:link,
  &:visited {
    text-decoration: none;
  }
`;
