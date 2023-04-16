import { IFiltersValue } from '@interfaces/IAvailableFilters';
import React from 'react';

interface Props {
  item: IFiltersValue;
}

const FilterBlockItem = ({ item }: Props) => {
  return (
    <div className='ml-2 hover:text-background'>
      <span className='text-sm font-medium'>{item.name}</span>
      <span className='ml-1 text-xs text-gray-500'>({item.results})</span>
    </div>
  );
};

export default FilterBlockItem;
