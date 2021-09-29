import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from 'react-query';

import { setupWorker, setupServer } from '@belong/server';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import '@belong/ui/lib/tailwind.css';
import '../styles/index.css';
const queryClient = new QueryClient();

console.log(process.env.NEXT_PUBLIC_API_MOCKING);
// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   if (typeof window === 'undefined') {
//     setupServer().listen();
//   } else {
//     setupWorker().start();
//   }
// }

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const Layout =
    (Component as any).layout || (({ children }) => <>{children}</>);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>belong</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default App;
