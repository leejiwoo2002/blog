import React from 'react';
import { Stack, styled, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

interface ArticleCardProps {
  data: {
    fileName: string;
    title: string;
    birthTime: string;
    pid: number;
    description: string;
  };
}

const ArticleCard = ({ data }: ArticleCardProps) => {
  const { fileName, birthTime: birthTimeISOString, title, description } = data;
  const router = useRouter();

  const birthTime = dayjs(birthTimeISOString).format('YYYY년 MM월 D일');

  function goToArticle() {
    router.push(`/post/${fileName}`);
  }

  return (
    <Container whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={goToArticle}>
      <ImageContainer>
        <Image
          src={`/img/thumbnail/${data.pid}.png`}
          layout={'responsive'}
          alt={`${data.pid}번 게시글 썸네일`}
          width={100}
          height={52}
        />
      </ImageContainer>
      <TitleText align={'left'}>{title}</TitleText>
      <DescriptionText align={'left'}>{description}</DescriptionText>
      <DateText>{birthTime}</DateText>
    </Container>
  );
};

export default ArticleCard;

const Container = styled(motion.button)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexFlow: 'column',
  backgroundColor: '#F2F2F2',
  boxShadow: 'rgb(0 0 0 / 4%) 0px 4px 16px 0px',
  padding: '0',
  border: '0',
  ':hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('sm')]: {
    width: 'calc(50% - 8px)',
  },

  [theme.breakpoints.up('md')]: {
    width: 'calc(33% - 8px)',
  },
}));

const ImageContainer = styled(Stack)(() => ({
  width: '100%',
  position: 'relative',
}));

const TitleText = styled(Typography)(() => ({
  width: '100%',
  padding: '10px 10px 0px 10px',
  color: '#20403A',
  fontWeight: '700',
  fontSize: '20px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));

const DescriptionText = styled(Typography)(() => ({
  color: '#20403A',
  fontWeight: '500',
  fontSize: '14px',
  padding: '10px 10px 0px 10px',
  height: '80px',
}));

const DateText = styled(Typography)(() => ({
  color: '#20403A',
  fontSize: '14px',
  padding: '10px 10px 10px 10px',
}));
