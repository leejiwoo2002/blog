import Head from 'next/head';
import { Stack, styled, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import Image from 'next/image';
import ProfileImageSrc from '@img/profile.jpeg';
import Link from 'next/link';

import Layout from '@components/layout/layout';

const About = () => {
  return (
    <Container direction={'column'} alignItems={'center'} justifyContent={'center'}>
      <Head>
        <title>{"Jiwoo's Devlog - About"}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="연락처 및 GitHub, LinkedIn 정보" />

        <meta property="og:title" content="Jiwoo's Devlog - About" />
        <meta property="og:description" content="연락처 및 GitHub, LinkedIn 정보" />
        <meta property="og:site_name" content="FE 개발자 이지우의 개발 블로그" />
        <meta property="og:url" content="https://jiwoo.blog/about" />

        <meta property="og:type" content="article" />
        <meta property="og:image" content="/img/profile.jpeg" />
      </Head>
      <ImageContainer sx={{ mt: '30px' }}>
        <ProfileImage src={ProfileImageSrc} />
      </ImageContainer>
      <InfoContainer sx={{ mt: '30px' }}>
        <TitleText variant={'h2'}>Jiwoo Lee</TitleText>
        <DescriptionText>Front-end Developer</DescriptionText>
      </InfoContainer>
      <InfoContainer sx={{ mt: '30px' }}>
        <TitleText variant={'h2'}>Working at</TitleText>
        <DescriptionLinkText>채널코퍼레이션 - Growth Engineer</DescriptionLinkText>
      </InfoContainer>
      <InfoContainer sx={{ mt: '30px' }}>
        <TitleText variant={'h2'}>GitHub</TitleText>
        <Link href={'https://github.com/leejiwoo2002'}>
          <DescriptionLinkText>@leejiwoo2002</DescriptionLinkText>
        </Link>
      </InfoContainer>
      <InfoContainer sx={{ mt: '30px' }}>
        <Link href={'https://www.linkedin.com/in/%EC%A7%80%EC%9A%B0-%EC%9D%B4-40326a211/'}>
          <TitleLinkText variant={'h2'}>LinkedIn</TitleLinkText>
        </Link>
      </InfoContainer>
      <InfoContainer sx={{ mt: '30px', mb: '30px' }}>
        <TitleText variant={'h2'}>Mail</TitleText>
        <DescriptionText>leejiwoo2002@gmail.com</DescriptionText>
      </InfoContainer>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => ({
  width: '100%',
}));

const ImageContainer = styled(Stack)(() => ({
  width: '285px',
}));

const ProfileImage = styled(Image)(() => ({
  borderRadius: '5px',
}));

const InfoContainer = styled(Stack)(() => ({
  width: '285px',
}));

const TitleText = styled(Typography)(() => ({
  fontWeight: '600',
  fontSize: '30px',
}));

const TitleLinkText = styled(TitleText)(() => ({
  ':hover': {
    cursor: 'pointer',
  },
}));

const DescriptionText = styled(Typography)(() => ({
  fontSize: '15px',
}));

const DescriptionLinkText = styled(DescriptionText)(() => ({
  ':hover': {
    cursor: 'pointer',
  },
}));

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={'About'}>{page}</Layout>;
};

export default About;
