import React from 'react';

interface Props {
  text: string;
  onRemove: () => void;
}

const FilterSelected = ({ text, onRemove }: Props) => {
  return (
    <div className='grid grid-flow-col px-2 py-1 mb-4 rounded-lg w-fit bg-primary'>
      <span className='mr-2 text-sm text-white'>{text}</span>
      <button onClick={onRemove} className='text-white hover:text-black'>
        X
      </button>
    </div>
  );
};

export default FilterSelected;
