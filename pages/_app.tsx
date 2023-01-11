import type {AppProps} from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {MDXProvider} from '@mdx-js/react'
import theme from '@styles/globalTheme';
import {NextPage} from 'next';
import {ReactElement, ReactNode} from 'react';
import Header from '@components/header/header';
import Quote from "@components/quote/quote";
import Code from "@components/code/code";
import Strong from "@components/strong/strong";
import { Analytics } from '@vercel/analytics/react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const components = {
  blockquote: Quote,
  code: Code,
  strong: Strong,
}

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        {/* @ts-ignore */}
        {getLayout(<Component {...pageProps} />)}
        <Analytics/>
      </ThemeProvider>
    </MDXProvider>
  )
}

export default MyApp;
