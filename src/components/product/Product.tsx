import { Result } from '@interfaces/MeliReq';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart, FaCartPlus, FaEye } from 'react-icons/fa';
import SquareIconButton from '../share/SquareIconButton';
import Price from '@component/share/Price';

interface Props {
  item: Result;
}

const Product = ({ item }: Props) => {
  return (
    <Link href={`/product/${item.id}`}>
      <div className='grid w-full grid-cols-1 gap-4 border-2 rounded-lg shadow-md border-1 grid-col'>
        <div className='grid grid-cols-5 gap-1 m-4'>
          <div className='grid col-span-2 place-content-center md:col-span-5'>
            <Image
              src={`https://http2.mlstatic.com/D_NQ_NP_932002-${item.thumbnail_id}-V.webp`}
              alt={item.title}
              className='inset-0 object-cover h-auto w-28 sm:w-40'
              loading='lazy'
              width={160}
              height={160}
            />
          </div>
          <div className='grid items-center w-full grid-flow-col col-span-3 grid-rows-3 p4 md:col-span-5'>
            <h5 className='h-16 text-sm font-medium sm:text-md line-clamp-3'>
              {item.title}
            </h5>
            <div className='grid grid-flow-row'>
              <Price originalPrice={item.original_price} price={item.price} />
              {item.available_quantity === 1 && (
                <span className='text-xs font-medium text-red-500'>
                  Solo uno en stock ordenar pronto
                </span>
              )}
            </div>
            <div className='grid grid-flow-col place-items-center'>
              <SquareIconButton>
                <FaEye />
              </SquareIconButton>
              <SquareIconButton>
                <FaHeart />
              </SquareIconButton>
              <SquareIconButton>
                <FaCartPlus />
              </SquareIconButton>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
