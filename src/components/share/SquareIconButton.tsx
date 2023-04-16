import React from 'react';
import { IconType } from 'react-icons/lib';

interface Props {
  children: React.ReactElement<IconType>;
}

const SquareIconButton = ({ children }: Props) => {
  return (
    <button className='flex items-center justify-center w-10 h-10 p-2 ml-2 mr-2 text-white rounded bg-secondary hover:bg-primary hover:text-white'>
      {children}
    </button>
  );
};

export default SquareIconButton;
