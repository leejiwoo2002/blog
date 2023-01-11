import Head from 'next/head';
import { Stack, styled } from '@mui/material';
import React, { ReactElement } from 'react';
import Layout from '@components/layout/layout';
import { InferGetStaticPropsType } from 'next';
import { readdirSync } from 'fs';
import { join } from 'path';
import ArticleCard from '@components/card/articleCard/articleCard';

interface MetaProps {
  title: string;
  fileName: string;
  birthTime: string;
  pid: number;
  description: string;
}

async function getFileMeta(fileName: string) {
  const { meta } = await import(`./post/${fileName}`);
  return meta;
}

async function getArticleList(dirFileList: string[]) {
  const articleList: MetaProps[] = [];
  for (let index = 0; index < dirFileList.length; index++) {
    const fileName = dirFileList[index];
    const meta = await getFileMeta(fileName);
    articleList.push({
      title: meta.title,
      fileName: fileName.split('.')[0],
      birthTime: meta.birthTime,
      pid: meta.pid,
      description: meta.description,
    });
  }

  articleList.sort((a, b) => b.pid - a.pid);

  return articleList;
}

export async function getStaticProps() {
  const postsDirectory = join(process.cwd(), 'pages/post');
  const dirFileList = readdirSync(join(postsDirectory));

  const articleList = await getArticleList(dirFileList);

  return { props: { articleList } };
}

const Home = ({ articleList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Head>
        <title>{"Jiwoo's Devlog"}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="FE 개발 블로그. 개발하면서 겪었던 문제점들을 기록하고 공유하고자 합니다."
        />

        <meta property="og:title" content="Jiwoo's Devlog" />
        <meta
          property="og:description"
          content="FE 개발 블로그. 개발하면서 겪었던 문제점들을 기록하고 공유하고자 합니다."
        />
        <meta property="og:site_name" content="FE 개발 블로그" />
        <meta property="og:url" content="https://jiwoo.blog" />

        <meta property="og:type" content="article" />
        <meta property="og:image" content="/img/thumbnail/main.jpg" />
      </Head>
      {/*<ArticleList articleList={articleList} />*/}
      {articleList.map((data, index) => (
        <ArticleCard data={data} key={index} />
      ))}
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => ({
  width: '100%',
  alignItems: 'center',
  padding: '30px 0 30px 0',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexFlow: 'row',
    flexWrap: 'wrap',
  },
}));

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={'Posts'}>{page}</Layout>;
};

export default Home;
