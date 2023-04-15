import { Result } from '@interfaces/MeliReq';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart, FaCartPlus, FaEye } from 'react-icons/fa';

interface Props {
  item: Result;
}

const Product = ({ item }: Props) => {
  return (
    <Link href={`/product/${item.id}`}>
      <div className='grid w-full grid-cols-1 gap-4 p-4 border-2 rounded-md shadow-md grid-col'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='grid col-span-1 place-content-center sm:col-span-3'>
            <Image
              src={`https://http2.mlstatic.com/D_NQ_NP_932002-${item.thumbnail_id}-V.webp`}
              alt={item.title}
              className='inset-0 object-cover h-auto w-28 sm:w-40'
              loading='lazy'
              width={160}
              height={160}
            />
          </div>
          <div className='grid col-span-2 place-content-evenly sm:col-span-3'>
            <h5 className='text-sm font-medium sm:text-md line-clamp-3 sm:line-clamp-2'>
              {item.title}
            </h5>
            <span>${item.price}</span>
          </div>
          <div className='col-span-3'>
            <div className='flex justify-center h-full'>
              <button className='flex items-center justify-center p-2 ml-2 mr-2 text-white rounded bg-secondary hover:bg-primary hover:text-white'>
                <FaEye />
              </button>
              <button className='flex items-center justify-center p-2 ml-2 mr-2 text-white rounded bg-secondary hover:bg-primary hover:text-white'>
                <FaHeart />
              </button>
              <button className='flex items-center justify-center p-2 ml-2 mr-2 text-white rounded bg-secondary hover:bg-primary'>
                <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
