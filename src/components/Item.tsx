import { Result } from '@interfaces/MeliReq';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  item: Result;
}

const Item = ({ item }: Props) => {
  return (
    <Link href={`/product/${item.id}`}>
      <div className='grid w-full min-w-0 grid-cols-2 gap-4 p-4 border-2 rounded-md shadow-md grid-col sm:grid-rows-2 md:grid-rows-2 xl:grid-rows-2'>
        <div className='grid place-content-center'>
          <Image
            src={`https://http2.mlstatic.com/D_NQ_NP_932002-${item.thumbnail_id}-V.webp`}
            alt={item.title}
            className='inset-0 object-cover w-40 h-auto'
            loading='lazy'
            width={160}
            height={160}
          />
        </div>
        <div className='grid place-content-evenly'>
          <h1>{item.title}</h1>
          <p>
            {item.currency_id} {item.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
