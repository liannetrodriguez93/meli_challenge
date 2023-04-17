import { IFiltersValue } from '@interfaces/IAvailableFilters';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  item: IFiltersValue;
  optionId: string;
}

const FilterBlockItem = ({ item, optionId }: Props) => {
  const { asPath } = useRouter();

  const newQuery = `${optionId}=${encodeURIComponent(item.id)}`;
  let newLink = '';
  const splitedQueries = asPath
    .split('&')
    .filter((query) => !query.includes(optionId) && !query.includes('offset'))
    .join('&');
  if (asPath.includes(optionId)) {
    newLink += `${splitedQueries}&${newQuery}`;
  } else {
    newLink = `${splitedQueries}&${newQuery}`;
  }

  return (
    <Link href={newLink}>
      <div className='ml-2 hover:text-background'>
        <span className='text-sm font-medium'>{item.name}</span>
        <span className='ml-1 text-xs text-gray-500'>({item.results})</span>
      </div>
    </Link>
  );
};

export default FilterBlockItem;
