import { useAppSelector } from '@hooks/hooks';
import Link from 'next/link';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SquareIconButton from '../share/SquareIconButton';

const PaginationBar = () => {
  const { pagin } = useAppSelector((state) => state.meli);
  const pages = Array.from({ length: pagin?.total ?? 0 }, (_, i) => i + 1);

  return (
    <nav className='flex items-center justify-center mt-4'>
      <SquareIconButton>
        <FaChevronLeft />
      </SquareIconButton>
      <ul className='grid grid-cols-5'>
        {pages.slice(0, 5).map((page) => (
          <li key={page}>
            <Link href={`/${page}`} legacyBehavior>
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
      <SquareIconButton>
        <FaChevronRight />
      </SquareIconButton>
    </nav>
  );
};

export default PaginationBar;
