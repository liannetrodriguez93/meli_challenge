import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <div className='grid items-center justify-center w-full h-full bg-gray-100'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='mb-4 text-4xl font-bold text-red-600'>Error</h1>
        <p className='mb-8 text-xl text-gray-500'>
          Lo sentimos, ha ocurrido un error.
        </p>
        <button
          onClick={() => window.location.reload()}
          className='p-2 text-base text-white bg-red-500 rounded-md hover:bg-red-600'
        >
          Volver a intentar
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
