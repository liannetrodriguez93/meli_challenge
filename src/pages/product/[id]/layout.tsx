import { useAppSelector } from '@hooks/hooks';
import useGetWindowSize from '@hooks/useGetWindowSize';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ProductLayout = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const { screenSize } = useGetWindowSize();
  const { query } = useAppSelector((state) => state.meli);
  const router = useRouter();

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

  const handleClose = () => {
    router.push(`/search/${query}`);
    setIsOpen((open) => !open);
  };

  return (
    <>
      <Modal isOpen={isOpen} style={customStyles}>
        {children}
        <button
          className='absolute px-3 py-1 text-white rounded-full bg-primary right-2 top-2'
          onClick={handleClose}
        >
          X
        </button>
      </Modal>
    </>
  );
};

export default ProductLayout;
