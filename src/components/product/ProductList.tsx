import React from 'react';
import Product from './Product';
import { Result } from '@interfaces/MeliReq';

interface Props {
  data: Result[];
}

const ProductList = ({ data }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-4 h-min md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
