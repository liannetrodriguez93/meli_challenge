import React from 'react';
import Search from './Search';
import { HiMenu } from 'react-icons/hi';

const Header = ({ onSidebarToggle }: any) => {
  return (
    <header className='grid w-full grid-cols-2 gap-4 px-4 py-2 text-white bg-gray-800 md:px-8'>
      <div className='flex col-span-2 row-span-1 justify-items-center sm:col-span-1'>
        <button onClick={onSidebarToggle}>
          <HiMenu className='text-2xl' />
        </button>
        <h1 className='ml-2 text-lg font-semibold'>Meli Challenge</h1>
      </div>
      <div className='flex items-center col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 sm:justify-end'>
        <Search />
      </div>
    </header>
  );
};

export default Header;
