import ModalLayout from '@components/share/ModalLayout';
import { useAppDispatch, useAppSelector } from '@hooks/useHookApp';
import { setIsOpenModal } from '@reduxConfig/feature/product/productSlices/productInfoSlice';
import React from 'react';
import ProductInfo from './ProductInfo';
import ProductTableAtributes from './ProductTable';
import ProductDetail from './ProductDetail';
import Loader from '@components/share/Loader';

const ProductModal = () => {
  const dispatch = useAppDispatch();
  const { isOpenModal, loading } = useAppSelector((state) => state.productInfo);

  const handleViewClick = () => {
    dispatch(setIsOpenModal());
  };

  return (
    <>
      {isOpenModal && (
        <ModalLayout open={isOpenModal} onClick={handleViewClick}>
          {loading && <Loader loading={loading} />}
          <ProductInfo />
          <div className='text-gray-700 bg-gray-100 rounded shadow '>
            <ProductTableAtributes />
            <ProductDetail />
          </div>
        </ModalLayout>
      )}
    </>
  );
};

export default ProductModal;
