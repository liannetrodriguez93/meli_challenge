import { IAvailableFilters } from '@interfaces/IAvailableFilters';
import Link from 'next/link';
import React from 'react';
import FilterBlockItem from './FilterBlockItem';

interface Props {
  option: IAvailableFilters;
}

const FilterBlock = ({ option }: Props) => {
  const slicedValues =
    option.values.length > 8 ? option.values.slice(0, 8) : option.values;
  return (
    <Link href={'#'}>
      <div className='grid w-full grid-rows-1 mb-4'>
        <label className='inline-flex items-center mb-1 font-semibold'>
          <span>{option.name}</span>
        </label>
        <div className='grid grid-rows-1 gap-1'>
          {slicedValues.map((item) => (
            <FilterBlockItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default FilterBlock;
