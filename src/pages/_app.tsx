import Header from '@component/Header';
import LayoutRoot from '@component/Layout';
import Sidebar from '@component/Sidebar';
import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  console.log('app');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    console.log('open side bar', isSidebarOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <LayoutRoot title='Challenge Meli'>
      <div className='flex flex-col h-screen'>
        <Header onSidebarToggle={handleSidebarToggle} />
        <div className='flex flex-1'>
          <Sidebar
            className={`fixed left-0 w-4/5 p-4 h-full md:w-1/5 bg-primary ${
              isSidebarOpen ? 'block' : 'hidden'
            }`}
            handleCloseSidebar={handleSidebarToggle}
          />
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
