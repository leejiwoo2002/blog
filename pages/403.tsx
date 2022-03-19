import type { NextPage } from 'next';
import Head from 'next/head';
import { Stack, styled, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import Layout from '@components/layout/layout';
import Home from './index';

const Error = () => {
  return (
    <Container>
      <Head>
        <title>{"Jiwoo's Devlog - 403 Request Failed"}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => ({
  width: '100%',
}));

Error.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title={'403 Forbidden'} description={'Request Failed'}>
      {page}
    </Layout>
  );
};

export default Error;
