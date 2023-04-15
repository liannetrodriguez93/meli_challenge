import { IAvailableFilters } from '@interfaces/IAvailableFilters';
import Link from 'next/link';
import React from 'react';

interface Props {
  option: IAvailableFilters;
}

const FilterBlock = ({ option }: Props) => {
  const slicedValues =
    option.values.length > 8 ? option.values.slice(0, 8) : option.values;
  return (
    <Link href={'#'}>
      <div key={option.type} className='grid w-full grid-rows-1 mb-4'>
        <label className='inline-flex items-center mb-1 font-semibold'>
          <span>{option.name}</span>
        </label>
        <div className='grid grid-rows-1 gap-1'>
          {slicedValues.map((values) => {
            return (
              <div className='flex items-center'>
                <span className='ml-2 text-sm font-medium'>{values.name}</span>
                <span className='ml-1 text-xs text-gray-500'>
                  ({values.results})
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default FilterBlock;
