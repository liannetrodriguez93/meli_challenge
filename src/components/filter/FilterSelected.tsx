import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  id: string;
  name: string;
}

const FilterSelected = ({ id, name }: Props) => {
  const { asPath } = useRouter();

  const newQuery = asPath
    .split('&')
    .filter((query) => !query.includes(id) && !query.includes('offset'))
    .join('&');

  return (
    <div
      data-testid='filter-selected'
      className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary text-white'
    >
      <span className='w-full mr-2 text-sm text-white sm:text-xs'>{name}</span>
      <Link href={newQuery}>
        <span className='text-sm text-white sm:text-base hover:text-black'>
          X
        </span>
      </Link>
    </div>
  );
};

export default FilterSelected;
