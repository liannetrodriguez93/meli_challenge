import React from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/useHookApp';
import useGetWindowSize from '@hooks/useGetWindowSize';
import Modal from 'react-modal';
import { setIsOpenModal } from '@reduxConfig/feature/product/productSlices/productInfoSlice';

Modal.setAppElement('#root');

const ProductLayout = ({ children }: any) => {
  const { screenSize } = useGetWindowSize();
  const dispatch = useAppDispatch();
  const { isOpenModal } = useAppSelector((state) => state.productInfoSlice);

  const handleViewClick = () => {
    dispatch(setIsOpenModal());
  };

  const customStyles = {
    content: {
      inset: 'auto',
      right: 'auto',
      width: screenSize.width >= 1024 ? '60%' : '80%',
      height: '80%',
      bottom: 'auto',
      marginRight: '-50%',
      transform:
        screenSize.width >= 1024
          ? 'translate(30%, 15%)'
          : 'translate(12%, 12%)',
    },
  };

  return (
    <>
      <Modal isOpen={isOpenModal} style={customStyles}>
        {children}
        <button
          className='absolute px-3 py-1 text-white rounded-full bg-primary right-2 top-2'
          onClick={handleViewClick}
        >
          X
        </button>
      </Modal>
    </>
  );
};

export default ProductLayout;
