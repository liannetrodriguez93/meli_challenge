import { useAppSelector } from '@hooks/hooks';
import React from 'react';
import FilterBlock from './FilterBlock';

const FilterPanel = () => {
  const { availableFilters } = useAppSelector((state) => state.meli);

  return (
    <div className='p-4 bg-gray-100'>
      <h2 className='mb-2 text-lg font-bold'>Filtrar por:</h2>
      {availableFilters?.map((option) => (
        <FilterBlock option={option} key={option.id} />
      ))}
    </div>
  );
};

export default FilterPanel;
