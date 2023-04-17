import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import React from 'react';
import FilterBlock from './FilterBlock';
import { IAvailableFilters } from '@interfaces/IAvailableFilters';
import { setOpenFilterBar } from '@reduxConfig/feature/filterBar/filterBarSlice';
import { Filter } from '@interfaces/MeliReq';
import FilterSelected from './FilterSelected';

const FilterPanel = () => {
  const { availableFilters, filterSelected } = useAppSelector(
    (state) => state.meli
  );
  const dispatch = useAppDispatch();

  const handleOpenFilterBar = () => {
    dispatch(setOpenFilterBar());
  };

  return (
    <div className='p-4 pt-8 bg-gray-100 sm:p-4'>
      <button
        className='absolute top-0 right-0 p-1 mt-2 mr-3 rounded-full shadow-lg w-9 h-9 bg-primary sm:hidden'
        onClick={handleOpenFilterBar}
      >
        <span className='text-lg font-medium text-white'>X</span>
      </button>
      <div className='grid grid-flow-row mb-2 w-fit'>
        <h2 className='mb-2 text-lg font-bold'>Filtro seleccionado(s):</h2>
        <div className='flex flex-wrap w-full gap-2'>
          {filterSelected.map((filter: Filter) => (
            <FilterSelected
              key={filter.id}
              filter={filter}
              onRemove={() => console.log('remove selected filter')}
            />
          ))}
        </div>
      </div>
      <h2 className='mb-2 text-lg font-bold'>Filtrar por:</h2>
      {availableFilters?.map((option: IAvailableFilters) => (
        <FilterBlock option={option} key={option.id} />
      ))}
    </div>
  );
};

export default FilterPanel;
