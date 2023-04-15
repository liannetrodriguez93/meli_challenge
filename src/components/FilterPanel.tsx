import { useAppSelector } from '@hooks/hooks';
import React, { useState } from 'react';
import FilterBlock from './FilterBlock';

interface FilterOption {
  value: string;
  label: string;
}

const FilterPanel = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const { availableFilters } = useAppSelector((state) => state.meli);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div className='p-4 bg-gray-100 rounded-md'>
      <h2 className='mb-2 text-lg font-bold'>Filtrar por:</h2>
      {availableFilters?.map((option) => (
        <FilterBlock option={option} />
      ))}
    </div>
  );
};

export default FilterPanel;
