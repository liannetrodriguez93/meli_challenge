import React from 'react';
import Search from './Search';
import { HiMenu } from 'react-icons/hi';

const Header = ({ onSidebarToggle }: any) => {
  return (
    <header className='fixed flex flex-col items-center justify-between w-full px-4 py-2 text-white bg-gray-800 md:px-8 md:flex-row'>
      <div className='flex items-center w-full md:w-auto'>
        <button onClick={onSidebarToggle}>
          <HiMenu className='text-2xl' />
        </button>
        <h1 className='ml-2 text-lg font-semibold'>Título de la página</h1>
      </div>
      <div className='flex items-center w-full mt-2 md:w-auto md:mt-0'>
        <Search />
      </div>
    </header>
  );
};

export default Header;
