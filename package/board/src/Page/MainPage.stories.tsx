import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { Header } from '../components/HeaderLayout.stories';
import { IntroTitle } from '../components/Intro/IntroTitle';

export default {
  title: 'document/MainPage',
} as Meta;

export const Main: Story = () => {
  return (
    <>
      <Header />
      <IntroTitle {...IntroArgs} />
      <Layout>
        <PageLayout></PageLayout>
      </Layout>
    </>
  );
};

const IntroArgs = {
  title: 'KUICS',
  description: 'Korea University Institute of Computer Security',
};

const PageLayout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Layout = styled.div`
  width: 100vw;
  min-width: 1024px;
  margin-top: 60px;
`;
