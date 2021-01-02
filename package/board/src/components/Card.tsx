import React from 'react';
import styled from 'styled-components';

interface styledCardProps {
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  fontSize?: string;
  radius?: string;
}

export interface cardProps extends styledCardProps {
  children?: React.ReactNode;
}

export const Card = (args: cardProps) => {
  return <StyledCard {...args}>{args.children}</StyledCard>;
};

const StyledCard = styled.div<styledCardProps>`
  width: ${p => p.width || '200px'};
  height: ${p => p.height || '80px'};
  border-radius: ${p => p.radius || '15px'};
  background-color: ${p => p.bgColor || '#ffffff'};
  color: ${p => p.color || 'white'};

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
`;
