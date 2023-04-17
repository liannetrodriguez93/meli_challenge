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
  if (asPath.includes(optionId)) {
    const splitedQueries = asPath.split('&');
    const filterSplited = splitedQueries.filter(
      (query) => !query.includes(optionId)
    );
    newLink = `search?${filterSplited.join('&')}&${newQuery}`;
  } else {
    newLink = `${asPath}&${newQuery}`;
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
