import React from 'react';
import useGetWindowSize from '@hooks/useGetWindowSize';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface Props {
  children: React.ReactElement[];
  open: boolean;
  onClick: () => void;
}

const ModalLayout = ({ children, open, onClick }: Props) => {
  const { width } = useGetWindowSize();

  const customStyles = {
    content: {
      inset: 'auto',
      right: 'auto',
      width: width >= 1024 ? '60%' : '80%',
      height: '80%',
      bottom: 'auto',
      marginRight: '-50%',
      transform: width >= 1024 ? 'translate(30%, 15%)' : 'translate(12%, 12%)',
    },
  };

  return (
    <Modal isOpen={open} style={customStyles}>
      {children}
      <button
        className='absolute px-3 py-1 text-white rounded-full bg-primary right-2 top-2'
        onClick={onClick}
      >
        X
      </button>
    </Modal>
  );
};

export default ModalLayout;
