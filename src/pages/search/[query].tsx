'use client';

import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@hooks/hooks';
import SearchResults from '@component/search/SearchResult';
import Sidebar from '@component/Sidebar';
import useGetWindowSize from '@hooks/useGetWindowSize';
import FilterHeader from '@component/filter/FilterHeader';
import Loader from '@component/share/Loader';

const ProductList = () => {
  const { loading } = useAppSelector((state) => state.meli);
  const { open } = useAppSelector((state) => state.filterBar);
  const [sideBarClass, setSideBarClass] = useState('initialState');
  const { screenSize } = useGetWindowSize();

  useEffect(() => {
    if (screenSize.width < 640) {
      if (open) {
        setSideBarClass('grid fixed inset-y-0');
      } else {
        setSideBarClass('hidden');
      }
    }
  }, [open]);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className='grid grid-flow-row h-min'>
          <FilterHeader />
          <div className='grid grid-flow-col grid-cols-5 md:grid-cols-6'>
            <div
              className={`h-screen overflow-y-auto sm:h-min sm:overflow-y-hidden sm:block sm:col-span-2 ${sideBarClass}`}
            >
              <Sidebar />
            </div>
            <div className='col-span-5 sm:col-span-3 md:col-span-4'>
              <SearchResults />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
