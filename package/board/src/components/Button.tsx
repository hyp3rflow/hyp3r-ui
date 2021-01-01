import React from 'react';
import styled from 'styled-components';

export const Button = () => {
  return <StyledButton>hi</StyledButton>;
};

interface styledButtonProps {
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
}

const StyledButton = styled.button<styledButtonProps>`
  width: ${p => p.width || '200px'};
  height: ${p => p.height || '80px'};
  border-radius: 50%;
  background-color: ${p => p.bgColor || 'orange'};
  color: ${p => p.color || 'white'};
`;
