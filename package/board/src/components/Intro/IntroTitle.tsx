import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface IProp {
  title: string;
  description: string;
}

export const IntroTitle = (args: IProp) => {
  return (
    <IntroTitleContainer>
      <CardContainer>
        <IntroTitleCard>
          <h1>{args.title}</h1>
        </IntroTitleCard>
        <IntroDescCard>
          <div>{args.description}</div>
        </IntroDescCard>
        <IntroExcerpt></IntroExcerpt>
      </CardContainer>
    </IntroTitleContainer>
  );
};

const IntroTitleContainer = styled.div`
  width: 100vw;
  height: 500px;

  display: flex;

  align-items: center;
  justify-content: center;

  background-image: url('https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1491&q=80');
  background-repeat: no-repeat;
  background-position: center;
`;

const CardContainer = styled.div`
  position: relative;
  top: 30px;

  display: flex;

  align-items: center;
  justify-content: center;
`;

const SlideInFromUp = keyframes`
  0% {
    top: -80px;
    left: 0px;
    opacity: 0;
  }

  100% {
    top: -30px;
    left: -20px;
    opacity: 1;
  }
`;

const IntroTitleCard = styled.div`
  position: relative;
  top: -30px;
  left: -20px;

  background-color: none;
  backdrop-filter: blur(15px);
  height: 70px;
  line-height: 70px;
  color: #fff;

  padding: 20px 50px;
  transform: skewX(-10deg);

  border-left: 15px solid #1ea7fd;
  animation: 0.7s ease-in-out ${SlideInFromUp};

  h1 {
    transform: skewX(10deg);
    margin: 0;

    font-size: 50px;
  }
`;

const IntroDescCard = styled.div`
  position: relative;
  left: -1px;

  background-color: #fff;
  height: 60px;
  line-height: 60px;
  color: #111;

  font-size: 20px;

  padding: 10px 30px;
  transform: skewX(-10deg);

  div {
    transform: skewX(10deg);
    margin: 0;
  }
`;

const IntroExcerpt = styled.div``;
