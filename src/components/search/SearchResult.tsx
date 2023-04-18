import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@hooks/useHookApp';
import ProductList from '../product/ProductList';
import PaginationBar from './PaginationBar';
import ProductModal from '@components/product/ProductModal';
import Sidebar from '@components/Sidebar';
import FilterHeader from '@components/filter/FilterHeader';
import useGetWindowSize from '@hooks/useGetWindowSize';
import ProductNotFound from '@components/product/ProductNotFound';

function SearchResults() {
  const { products } = useAppSelector((state) => state.productListSlice);
  const [sideBarClass, setSideBarClass] = useState('initialState');
  const { screenSize } = useGetWindowSize();
  const { open } = useAppSelector((state) => state.filterBar);

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
      {products?.length > 0 ? (
        <div className='grid grid-flow-row h-min'>
          <FilterHeader />
          <div className='grid grid-flow-col grid-cols-5 md:grid-cols-6'>
            <div
              className={`h-screen overflow-y-auto sm:h-min sm:overflow-y-hidden sm:block sm:col-span-2 ${sideBarClass}`}
            >
              <Sidebar />
            </div>
            <div className='col-span-5 sm:col-span-3 md:col-span-4'>
              <div className='grid p-4 h-max'>
                <ProductList products={products} />
                <PaginationBar />
              </div>
            </div>
          </div>
          <ProductModal />
        </div>
      ) : (
        <ProductNotFound />
      )}
    </>
  );
}

export default SearchResults;
