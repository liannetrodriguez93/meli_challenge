import Header from '@component/Header';
import LayoutRoot from '@component/Layout';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

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
        <footer>
          <h1>footer</h1>
        </footer>
      </div>
    </LayoutRoot>
  );
}
