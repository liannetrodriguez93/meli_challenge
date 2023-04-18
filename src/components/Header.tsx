import React from 'react';
import Search from './search/Search';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      role='banner'
      className='grid items-baseline w-full grid-cols-1 gap-4 px-4 py-2 text-white sm:grid-cols-2 bg-darkBlue md:px-8'
    >
      <div className='flex col-span-2 row-span-1 justify-items-center sm:col-span-1'>
        <Link href={'/'}>
          <h1 className='text-lg font-semibold sm:ml-2'>Meli Challenge</h1>
        </Link>
      </div>
      <div className='flex items-center col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 sm:justify-end'>
        <Search />
      </div>
    </header>
  );
};

export default Header;
