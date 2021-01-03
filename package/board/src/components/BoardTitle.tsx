import React from 'react';
import styled from 'styled-components';

export interface IProp {
  title: string;
}

export const BoardTitle = (args: IProp) => {
  return (
    <TitleContainer>
      <TitleHeading>{args.title}</TitleHeading>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  margin-top: 10px;
`;

const TitleHeading = styled.h1`
  position: relative;
  display: inline-block;

  margin: 0px 0px 20px 0px;
  padding-bottom: 10px;

  &::after {
    position: absolute;
    right: -22px;

    width: 15px;
    height: 15px;
    box-sizing: border-box;

    background-color: #1ea7fd;

    transition: all 0.2s ease;

    transform: rotate(45deg);
    content: '';
    z-index: -1;
  }

  &:hover::after {
    transform: rotate(90deg);
  }
`;
