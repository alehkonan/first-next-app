import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'next-auth/client';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Next app with auth</title>
        <meta name="description" content="it`s a simple next app with auth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp;
