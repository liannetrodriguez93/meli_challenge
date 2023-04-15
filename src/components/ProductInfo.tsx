import { IProductInfo } from '@interfaces/IProductInfo';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface Props {
  product: IProductInfo;
}

const ProductInfo = ({ product }: Props) => {
  return (
    <article>
      <div className='grid grid-cols-1 gap-4 mx-auto md:px-6 md:py-10 md:grid-cols-2'>
        <div className='w-full h-full md:mb-0'>
          <Image
            src={`https://http2.mlstatic.com/D_NQ_NP_932002-${product.thumbnail_id}-V.webp`}
            alt={product.title}
            className='grid object-cover w-full align-middle place-items-center '
            loading='lazy'
            width={250}
            height={250}
          />
        </div>
        <div>
          <h1 className='mb-2 text-2xl font-bold md:text-3xl'>
            {product.title}
          </h1>
          <div className='flex items-center mb-4'>
            <FaStar className='mr-1 text-lg text-yellow-500 md:text-2xl' />
            <FaStar className='mr-1 text-lg text-yellow-500 md:text-2xl' />
            <FaStar className='mr-1 text-lg text-yellow-500 md:text-2xl' />
            <FaStar className='mr-1 text-lg text-gray-400 md:text-2xl' />
            <FaStar className='mr-1 text-lg text-gray-400 md:text-2xl' />
            <span className='text-gray-500'>(34 reseñas)</span>
          </div>
          <h5 className='mb-2 text-lg font-bold md:text-2xl'>
            {product.price}
          </h5>
          <button className='px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
            Añadir al carrito
          </button>
        </div>
        <div className='col-span-1 md:col-span-2'></div>
      </div>
    </article>
  );
};

export default ProductInfo;
