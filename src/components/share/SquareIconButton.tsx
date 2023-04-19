import React from 'react';
import { IconType } from 'react-icons/lib';

interface Props {
  children: React.ReactElement<IconType>;
  onClick?: () => void;
  disabled?: boolean;
}

const SquareIconButton = ({ children, onClick, disabled }: Props) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`flex items-center justify-center w-8 h-8 p-2 mx-2 text-white rounded bg-secondary hover:bg-primary hover:text-white ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SquareIconButton;
