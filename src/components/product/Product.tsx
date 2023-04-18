import { IResult } from '@interfaces/IMeliReq';
import Image from 'next/image';
import React from 'react';
import { FaHeart, FaCartPlus, FaEye } from 'react-icons/fa';
import SquareIconButton from '../share/SquareIconButton';
import Price from '@components/share/Price';
import { useAppDispatch, useAppSelector } from '@hooks/useHookApp';
import {
  fetchProductInfo,
  fetchProductDetail,
} from '@reduxConfig/feature/product/productThunk/meliThunk';
import { setIsOpenModal } from '@reduxConfig/feature/product/productSlices/productInfoSlice';

interface Props {
  product: IResult;
}

const Product = ({ product }: Props) => {
  const { selectedProductInfo } = useAppSelector(
    (state) => state.productInfoSlice
  );
  const dispatch = useAppDispatch();

  const handleViewClick = () => {
    if (selectedProductInfo?.id !== product.id) {
      dispatch(fetchProductInfo(product.id));
      dispatch(fetchProductDetail(product.id));
    }
    dispatch(setIsOpenModal());
  };

  return (
    <div className='grid w-full grid-cols-1 gap-4 border-2 rounded-lg shadow-md border-1 grid-col'>
      <div className='grid grid-cols-5 gap-1 m-4'>
        <div className='grid col-span-2 place-content-center md:col-span-5'>
          <Image
            src={`https://http2.mlstatic.com/D_NQ_NP_932002-${product.thumbnail_id}-V.webp`}
            alt={product.title}
            className='inset-0 object-cover h-auto w-28 sm:w-40'
            loading='lazy'
            width={160}
            height={160}
          />
        </div>
        <div className='grid items-center w-full grid-flow-col col-span-3 grid-rows-3 h-min p4 md:col-span-5'>
          <h5 className='h-16 text-sm font-medium sm:text-md line-clamp-3'>
            {product.title}
          </h5>
          <div className='grid items-center h-20 grid-flow-row'>
            <Price
              originalPrice={product.original_price}
              price={product.price}
            />
            {product.available_quantity === 1 && (
              <span className='text-xs font-medium text-red-500'>
                Solo uno en stock ordenar pronto
              </span>
            )}
          </div>
          <div className='grid grid-flow-col h-fit place-items-center'>
            <SquareIconButton handleClick={handleViewClick}>
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
  );
};

export default Product;
