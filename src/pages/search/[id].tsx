import ListItem from '@component/ListItem';
import React from 'react';
import { useAppSelector } from '@hooks/hooks';
import { ScaleLoader } from 'react-spinners';

const ProductList = () => {
  const { loading, data, error } = useAppSelector((state) => state.meli);
  return (
    <>
      {loading ? (
        <div className='flex w-full h-full loader place-content-center'>
          <ScaleLoader color={'#569DAA'} loading={loading} />
        </div>
      ) : (
        <ListItem data={data} />
      )}
    </>
  );
};

export default ProductList;
