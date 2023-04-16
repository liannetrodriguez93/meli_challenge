import React from 'react';
import { useAppSelector } from '@hooks/hooks';
import ProductList from '../product/ProductList';
import PaginationBar from './PaginationBar';

function SearchResults() {
  const { data } = useAppSelector((state) => state.meli);
  return (
    <div className='grid p-4 h-max'>
      <ProductList data={data} />
      <PaginationBar />
    </div>
  );
}

export default SearchResults;
