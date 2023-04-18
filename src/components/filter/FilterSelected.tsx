import { IFilter } from '@interfaces/IMeliReq';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  filter: IFilter;
  onRemove: () => void;
}

const FilterSelected = ({ filter, onRemove }: Props) => {
  const { asPath } = useRouter();

  const newQuery = asPath
    .split('&')
    .filter((query) => !query.includes(filter.id) && !query.includes('offset'))
    .join('&');

  return (
    <div className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary text-white'>
      <span className='w-full mr-2 text-sm text-white sm:text-xs'>
        {filter.name}
      </span>
      <Link href={newQuery}>
        <button
          onClick={onRemove}
          className='text-sm text-white sm:text-base hover:text-black'
        >
          X
        </button>
      </Link>
    </div>
  );
};

export default FilterSelected;
