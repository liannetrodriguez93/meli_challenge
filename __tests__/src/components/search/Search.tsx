'use client';

import useSearchProduct from '@hooks/useSearchProduct';

const Search = () => {
  const { queryValue, handleSetQuery, handleSubmit, handleKeyDown } =
    useSearchProduct();

  return (
    <form onSubmit={handleSubmit} className='w-full gap-4'>
      <div className='grid grid-flow-col grid-cols-5 place-items-center sm:grid-cols-2'>
        <input
          id='autocomplete'
          className='w-full col-span-4 px-2 py-1 mr-2 text-black bg-white rounded-md focus:outline-none focus:ring focus:border-primary'
          type='text'
          placeholder='Search'
          aria-label='Search'
          aria-describedby='button-search'
          value={queryValue}
          onChange={(event) => handleSetQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className={`col-span-1 px-3 py-1 text-white rounded-md bg-primary ${
            queryValue === '' ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={queryValue === ''}
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

export default Search;
