import { useAppSelector } from '@hooks/useHookApp';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SquareIconButton from '../share/SquareIconButton';
import { useRouter } from 'next/router';

const PaginationBar = () => {
  const { asPath } = useRouter();
  const { paging } = useAppSelector((state) => state.productList);

  const totalPage = Math.ceil(paging.total / paging.limit);
  const pagingLength = totalPage > 5 ? 5 : totalPage;
  let startPage = paging.offset > 2 ? paging.offset - 2 : 1;
  if (paging.offset === totalPage) {
    startPage = totalPage > 5 ? totalPage - 5 : 1;
  }
  const pages = Array.from({ length: pagingLength }, (_, i) => i + startPage);

  const newQuery = asPath
    .split('&')
    .filter((query) => !query.includes('offset'))
    .join('&');

  return (
    <nav className='flex items-center justify-center mt-4'>
      <Link href={`${newQuery}&offset=${paging.offset - 1}`}>
        <SquareIconButton disabled={paging.offset - 1 === 0}>
          <FaChevronLeft />
        </SquareIconButton>
      </Link>
      <ul className='grid grid-flow-col'>
        {pages.map((page) => (
          <li key={page}>
            <Link href={`${newQuery}&offset=${page}`}>
              <span
                className={`block p-2 w-10 text-center border border-gray-300 text-gray-500 hover:bg-background hover:text-gray-700 
                ${page === paging?.offset ? 'bg-secondary text-white' : ''}`}
              >
                <div>{page}</div>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* <div className='block w-10 p-2 text-center text-gray-500 border border-gray-300 '>
        ...
      </div>
      <div className='block w-10 p-2 text-center text-gray-500 border border-gray-300 '>
        {totalPage}
      </div> */}
      <Link href={`${newQuery}&offset=${paging.offset + 1}`}>
        <SquareIconButton disabled={paging.offset === totalPage}>
          <FaChevronRight />
        </SquareIconButton>
      </Link>
    </nav>
  );
};

export default PaginationBar;
