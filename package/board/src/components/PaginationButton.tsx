import React from 'react';
import styled from 'styled-components';

export interface paginationButtonProps extends styledPaginationButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
}

interface styledPaginationButtonProps {
  bgColor?: string;
  color?: string;
}

export const PaginationButton = (args: paginationButtonProps) => {
  return (
    <StyledPaginationButton onClick={args.onClick} href={args.href} {...args}>
      {args.label}
    </StyledPaginationButton>
  );
};

const StyledPaginationButton = styled.a<styledPaginationButtonProps>`
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  line-height: 20px;
  padding: 4px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;

  background-color: ${p => p.bgColor || '#1EA7FD'};
  color: ${p => p.color || 'white'};
`;
