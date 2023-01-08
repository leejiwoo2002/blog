import React, {ReactNode} from 'react';
import Head from 'next/head';
import {Stack, styled, Typography} from '@mui/material';

interface LayoutProps {
  title?: string;
  description?: string;
  meta?: { title: string; description: string; birthTime: string; pid: number };
  children: ReactNode | ReactNode[];
}

const Layout = ({title, description, meta, children}: LayoutProps) => {
  return (
    <>
      {meta && (
        <Head key={meta.title}>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description}/>
          <meta name="viewport" content="initial-scale=1, width=device-width"/>
          <meta property="og:title" content={meta.title}/>
          <meta property="og:description" content={meta.description}/>
          <meta property="og:site_name" content="FE 개발자 이지우의 개발 블로그"/>
          <meta property="og:type" content="article"/>
          <meta property="og:image" content={`/img/thumbnail/${meta.pid}.png`}/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
        </Head>
      )}
      <Container direction={'column'} alignItems={'center'}>
        <Content direction={'column'}>
          <TitleText>{title}</TitleText>
          <DescriptionText>{description}</DescriptionText>
          <main>
            {children}
          </main>
        </Content>
      </Container>
    </>
  );
};

const Container = styled(Stack)(({theme}) => ({
  width: '100%',
}));

const Content = styled(Stack)(({theme}) => ({
  width: '100%',
  padding: '0 20px 0 20px',
  maxWidth: '1024px',
}));

const TitleText = styled(Typography)(({theme}) => ({
  fontWeight: 800,
  fontSize: '30px',
  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
  },
}));

const DescriptionText = styled(Typography)(({theme}) => ({
  color: '#A3A3A3',
  fontSize: '18px',
  borderBottom: '1px solid #A3A3A3',
  paddingBottom: '10px',
}));

export default Layout;
