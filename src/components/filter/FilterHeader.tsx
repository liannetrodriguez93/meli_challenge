import { useAppDispatch, useAppSelector } from '@hooks/useHookApp';
import { useRouter } from 'next/router';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { setOpenFilterBar } from '@reduxConfig/feature/filterBar/filterBarSlice';
import SortBy from '@components/search/SortBy';

const FilterHeader = () => {
  const { query } = useRouter();
  const { open } = useAppSelector((state) => state.filterBar);
  const { paging } = useAppSelector((state) => state.productList);
  const dispatch = useAppDispatch();

  const handleOpenFilterBar = () => {
    dispatch(setOpenFilterBar());
  };

  const initialElement =
    paging.offset === 1 ? 1 : (paging.offset - 1) * paging.limit + 1;
  const finalElement =
    paging.offset * paging.limit > paging.total
      ? paging.total
      : paging.offset * paging.limit;
  const total = finalElement === paging.total ? '' : `de ${paging.total}`;
  const headerText = `${initialElement} - ${finalElement} ${total} resultados para \"${query.q}\"`;

  return (
    <div className='grid items-baseline w-full grid-cols-2 grid-rows-2 gap-4 px-4 py-2 text-white sm:grid-rows-1 bg-secondary md:px-8'>
      <div className='col-span-2 sm:col-span-1'>
        <h1>{headerText}</h1>
      </div>
      <div className='grid items-baseline grid-flow-col col-span-2 gap-4 sm:col-span-1 place-content-end'>
        <button
          className={
            'grid grid-flow-col gap-1 p-1 pl-4 pr-4 rounded place-items-center sm:hidden bg-primary w-min'
          }
          onClick={handleOpenFilterBar}
        >
          <span>Filtrar</span>
          <FaChevronDown
            className={`transform duration-500 ease-in-out text-xs ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
        <SortBy />
      </div>
    </div>
  );
};

export default FilterHeader;
