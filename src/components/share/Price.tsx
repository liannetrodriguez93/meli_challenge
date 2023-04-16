import React from 'react';

interface Props {
  originalPrice: number | null;
  price: number;
}

const Price = ({ originalPrice, price }: Props) => {
  const discount = !!originalPrice
    ? Math.floor(100 - (price * 100) / originalPrice)
    : 0;
  return (
    <>
      {!!originalPrice && (
        <div className='flex items-center'>
          <span className='mr-2 text-sm line-through h-min w-min'>
            ${originalPrice}
          </span>
          <span className='flex px-0.5 h-min place-items-center text-xs text-white rounded w-min bg-secondary'>
            -{discount}%
          </span>
        </div>
      )}
      <span className='text-lg font-medium text-black'>${price} </span>
    </>
  );
};

export default Price;
