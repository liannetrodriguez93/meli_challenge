import { useAppDispatch, useAppSelector } from '@hooks/useHookApp';
import React from 'react';
import FilterBlock from './FilterBlock';
import { setOpenFilterBar } from '@reduxConfig/feature/filterBar/filterBarSlice';
import { IAvailableFilter, IFilter } from '@interfaces/IMeliReq';
import FilterSelected from './FilterSelected';

const FilterPanel = () => {
  const { availableFilters, filterSelected } = useAppSelector(
    (state) => state.productList
  );
  const dispatch = useAppDispatch();

  const handleOpenFilterBar = () => {
    dispatch(setOpenFilterBar());
  };

  const showFilterPanel =
    (!!filterSelected && filterSelected.length > 0) ||
    (!!availableFilters && availableFilters.length > 0);

  return (
    <div className='p-4 pt-8 bg-gray-100 sm:p-4'>
      {showFilterPanel ? (
        <>
          <button
            className='absolute top-0 right-0 p-1 mt-2 mr-3 rounded-full shadow-lg w-9 h-9 bg-primary sm:hidden'
            onClick={handleOpenFilterBar}
          >
            <span className='text-lg font-medium text-white'>X</span>
          </button>
          <div className='grid grid-flow-row mb-2 w-fit'>
            {!!filterSelected && filterSelected?.length > 0 && (
              <h2 className='mb-2 text-lg font-bold'>
                Filtro seleccionado(s):
              </h2>
            )}
            <div className='flex flex-wrap w-full gap-2'>
              {filterSelected?.map((filter: IFilter) => (
                <FilterSelected
                  key={filter.id}
                  id={filter.id}
                  name={filter.name}
                />
              ))}
            </div>
          </div>
          <h2 className='mb-2 text-lg font-bold'>Filtrar por:</h2>
          {availableFilters?.map((option: IAvailableFilter) => (
            <FilterBlock option={option} key={option.id} />
          ))}
        </>
      ) : (
        <h2 className='mb-2 text-lg font-bold'>No hay filtro disponible</h2>
      )}
    </div>
  );
};

export default FilterPanel;
