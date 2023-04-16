import ListProduct from '@component/product/ListProduct';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@hooks/hooks';
import { ScaleLoader } from 'react-spinners';
import SearchResults from '@component/search/SearchResult';
import Sidebar from '@component/Sidebar';
import useGetWindowSize from '@hooks/useGetWindowSize';

const ProductList = () => {
  const { loading } = useAppSelector((state) => state.meli);
  const { open } = useAppSelector((state) => state.filterBar);
  const { screenSize } = useGetWindowSize();

  useEffect(() => {
    if (screenSize.width < 640) {
      const sideBar = document.getElementById('sideBar');
      if (open) {
        sideBar?.classList.remove('hidden');
        sideBar?.classList.add('grid');
        sideBar?.classList.add('absolute');
        sideBar?.classList.add('w-full');
      } else {
        sideBar?.classList.remove('grid');
        sideBar?.classList.remove('absolute');
        sideBar?.classList.add('hidden');
      }
    }
  }, [open]);

  return (
    <>
      {loading ? (
        <div className='flex items-center justify-center w-full h-full p-16 loader'>
          <ScaleLoader color={'#569DAA'} loading={loading} />
        </div>
      ) : (
        <div className='grid grid-flow-col grid-cols-5 md:grid-cols-6'>
          <div id='sideBar' className='hidden sm:block sm:col-span-2'>
            <Sidebar />
          </div>
          <div className='col-span-5 sm:col-span-3 md:col-span-4'>
            <SearchResults />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
