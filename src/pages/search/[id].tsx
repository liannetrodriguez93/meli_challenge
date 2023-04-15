import ListItem from '@component/ListItem';
import React from 'react';
import { useAppSelector } from '@hooks/hooks';
import { ScaleLoader } from 'react-spinners';
import FilterPanel from '@component/FilterPanel';

const ProductList = () => {
  const { loading, data, error } = useAppSelector((state) => state.meli);
  return (
    <>
      {loading ? (
        <div className='flex items-center justify-center w-full h-full p-16 loader'>
          <ScaleLoader color={'#569DAA'} loading={loading} />
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-4 m-3 sm:grid-cols-3'>
          <div className='hidden sm:block'>
            <FilterPanel />
          </div>
          <div className='grid col-span-2'>
            <ListItem data={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
