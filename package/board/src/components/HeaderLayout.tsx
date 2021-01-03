import React from 'react';
import styled from 'styled-components';

interface IProp {
  children: React.ReactNode;
}

export const HeaderLayout = (args: IProp) => {
  return (
    <StyledHeader>
      <StyledLayout>{args.children}</StyledLayout>
    </StyledHeader>
  );
};

export const HeaderLogo = () => {
  return <StyledLogo>KUICS</StyledLogo>;
};

export const HeaderAnchorGroup = (args: IProp) => {
  return <StyledAnchorGroup>{args.children}</StyledAnchorGroup>;
};

export const HeaderProfileGroup = (args: IProp) => {
  return <StyledProfileGroup>{args.children}</StyledProfileGroup>;
};

const StyledLogo = styled.div`
  margin-right: 10px;
  font-weight: 600;
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;

  min-width: 1024px;

  width: 100vw;
  height: 60px;

  background-color: #fff;
  border-bottom: 1px solid rgb(246, 246, 246);

  z-index: 20;
`;

const StyledLayout = styled.div`
  max-width: 1024px;
  height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
`;

const StyledAnchorGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledProfileGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
