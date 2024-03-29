import Header from '@components/Header';
import LayoutRoot from '@components/Layout';
import type { AppProps } from 'next/app';
import '@styles/globals.css';
import Footer from '@components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutRoot title='Challenge Meli'>
      <div className='flex flex-col h-screen'>
        <Header />
        <div className='flex flex-1'>
          <main className='flex-1'>
            <Component {...pageProps} />
          </main>
        </div>
        <Footer />
      </div>
    </LayoutRoot>
  );
}
