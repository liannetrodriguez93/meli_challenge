import Head from 'next/head';
import React from 'react';
import { Providers } from '../redux/provider';

interface Props {
  title: string;
  children: React.ReactElement;
}

const LayoutRoot = ({ children, title }: Props) => {
  return (
    <>
      <Providers>
        <Head>
          <title>{title}</title>
          <meta name='description' content={title} />
          <link
            rel='/public/favicon.ico'
            href='favicon.ico'
            type='image/x-icon'
          />
        </Head>
        <div>{children}</div>
      </Providers>
    </>
  );
};

export default LayoutRoot;
