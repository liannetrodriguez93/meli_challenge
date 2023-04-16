import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { useRouter } from 'next/router';
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { setOpenFilterBar } from '@reduxConfig/feature/filterBar/filterBarSlice';

const FilterHeader = () => {
  const { asPath, query } = useRouter();
  const { open } = useAppSelector((state) => state.filterBar);
  const dispatch = useAppDispatch();

  const handleOpenFilterBar = () => {
    dispatch(setOpenFilterBar());
  };

  if (asPath === `/search/${query.query}`) {
    return (
      <div className='grid w-full grid-cols-2 gap-4 px-4 py-2 text-white bg-secondary md:px-8'>
        <h1>{query.query}</h1>
        <div className='grid place-content-end sm:hidden'>
          <button
            className={
              'grid grid-flow-col gap-1 p-1 pl-4 pr-4 rounded place-items-center bg-primary w-min'
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
        </div>
      </div>
    );
  }

  return <></>;
};

export default FilterHeader;
