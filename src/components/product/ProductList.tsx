import React from 'react';
import Product from './Product';
import { IResult } from '@interfaces/IMeliReq';

interface Props {
  products: IResult[];
}

const ProductList = ({ products }: Props) => {
  return (
    <div
      className='grid grid-cols-1 gap-4 h-min md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      data-testid='product-list-div'
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
