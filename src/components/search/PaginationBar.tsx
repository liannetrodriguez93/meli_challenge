import { useAppSelector } from '@hooks/hooks';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SquareIconButton from '../share/SquareIconButton';
import { useRouter } from 'next/router';

const PaginationBar = () => {
  const { asPath } = useRouter();
  const { pagin } = useAppSelector((state) => state.meli);
  const [startPage, setStartPage] = useState(
    pagin.offset > 2 ? pagin.offset - 2 : 1
  );
  const pages = Array.from({ length: 5 }, (_, i) => i + startPage);

  const splitedQuery = asPath.split('&');
  const filterSplited = splitedQuery.filter(
    (query) => !query.includes('offset')
  );
  const newQuery = filterSplited.join('&');

  return (
    <nav className='flex items-center justify-center mt-4'>
      <Link href={`${newQuery}&offset=${pagin.offset - 1}`}>
        <SquareIconButton disabled={pagin.offset - 1 === 0}>
          <FaChevronLeft />
        </SquareIconButton>
      </Link>
      <ul className='grid grid-cols-5'>
        {pages.map((page) => (
          <li key={page}>
            <Link href={`${asPath}&offset=${page}`} legacyBehavior>
              <a
                className={`block p-2 w-10 text-center border border-gray-300 text-gray-500 hover:bg-background hover:text-gray-700 
                ${page === pagin?.offset ? 'bg-secondary text-white' : ''}`}
              >
                <div>{page}</div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={`${newQuery}&offset=${pagin.offset + 1}`}>
        <SquareIconButton disabled={pagin.offset + 1 === pagin.total}>
          <FaChevronRight />
        </SquareIconButton>
      </Link>
    </nav>
  );
};

export default PaginationBar;
