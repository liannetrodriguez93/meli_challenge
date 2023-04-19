import Header from '@components/Header';
import Head from 'next/head';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Providers } from '../redux/provider';
import { persistor } from '@reduxConfig/store';

interface Props {
  title: string;
  children: React.ReactNode;
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
