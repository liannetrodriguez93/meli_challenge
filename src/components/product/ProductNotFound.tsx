import React from 'react';
import { FaSadTear } from 'react-icons/fa';

const ProductNotFound = () => {
  return (
    <div className='grid w-full h-full space-y-4 place-items-center'>
      <div className='grid grid-flow-row place-items-center h-fit'>
        <FaSadTear size={64} className='text-gray-500' />
        <h1 className='text-3xl font-bold text-gray-700'>
          No se encontraron resultados
        </h1>
        <p className='text-lg text-gray-500'>
          Lo sentimos, no se encontraron elementos para su búsqueda.
        </p>
      </div>
    </div>
  );
};

export default ProductNotFound;
