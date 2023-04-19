import Price from '@components/share/Price';
import { useAppSelector } from '@hooks/useHookApp';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductInfo = () => {
  const { selectedProductInfo } = useAppSelector((state) => state.productInfo);
  const shippingClasses = selectedProductInfo?.shipping?.free_shipping
    ? 'bg-secondary text-white'
    : '';

  return (
    <article>
      <div className='grid grid-flow-row grid-cols-1 gap-4 mx-auto md:pt-10 md:grid-cols-2'>
        <div className='flex justify-center w-full h-full md:mb-0'>
          <Image
            src={`https://http2.mlstatic.com/D_NQ_NP_932002-${selectedProductInfo?.thumbnail_id}-V.webp`}
            alt={selectedProductInfo?.title}
            className='object-contain w-3/4'
            loading='lazy'
            width={250}
            height={250}
          />
        </div>
        <div>
          <h1 className='mb-2 text-2xl font-bold md:text-3xl'>
            {selectedProductInfo?.title}
          </h1>
          <div className='flex items-center mb-4'>
            <FaStar className='mr-1 text-lg text-yellow-500 md:text-2xl' />
            <FaStar className='mr-1 text-lg text-yellow-500 md:text-2xl' />
            <FaStar className='mr-1 text-lg text-yellow-500 md:text-2xl' />
            <FaStar className='mr-1 text-lg text-gray-400 md:text-2xl' />
            <FaStar className='mr-1 text-lg text-gray-400 md:text-2xl' />
            <span className='text-gray-500'>(34 reseñas)</span>
          </div>
          <Price
            originalPrice={selectedProductInfo?.original_price}
            price={selectedProductInfo?.price}
          />
          <span
            className={`grid grid-rows-1 rounded w-fit px-2 items-baseline ${shippingClasses}`}
          >
            Envío gratis
          </span>
          <button className='px-6 py-2 my-4 text-white rounded-md bg-primary hover:bg-secondary focus:outline-none focus:ring focus:border-background'>
            Añadir al carrito
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductInfo;
