import React from 'react';
import { useAppSelector } from '@hooks/useHookApp';
import ProductList from '../product/ProductList';
import PaginationBar from './PaginationBar';

function SearchResults() {
  const { products } = useAppSelector((state) => state.productListSlice);

  return (
    <div className='grid p-4 h-max'>
      <ProductList products={products} />
      <PaginationBar />
    </div>
  );
}

export default SearchResults;
