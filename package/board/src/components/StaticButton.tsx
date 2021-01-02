import React from 'react';
import styled from 'styled-components';

interface styledStaticButtonProps {
  bgColor?: string;
  borderColor?: string;
  color?: string;
  fontSize?: string;
  radius?: string;
  padding?: string;
}

export interface staticButtonProps extends styledStaticButtonProps {
  label: string;
}

export const StaticButton = (args: staticButtonProps) => {
  return <StyledStaticButton {...args}>{args.label}</StyledStaticButton>;
};

const StyledStaticButton = styled.button<styledStaticButtonProps>`
  border: 1px solid ${p => p.borderColor || 'rgb(215, 215, 215)'};

  border-radius: ${p => p.radius || '5px'};
  background-color: ${p => p.bgColor || '#fff'};
  color: ${p => p.color || 'white'};
  padding: ${p => p.padding || '6px 12px'};

  font-size: ${p => p.fontSize || '14px'};
`;
