'use client';

import { useState } from 'react';
import { useAppDispatch } from '@hooks/hooks';
import { fetchData } from '@reduxConfig/feature/meli/meliThunk';
import { useRouter } from 'next/router';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchData(query));
    router.push(`/search/${query}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const submitEvent = new Event('submit', {
        bubbles: true,
        cancelable: true,
      });
      event.currentTarget.form?.dispatchEvent(submitEvent);
    }
  };

  //   const clearSearchBar = () => {
  //     console.log('clear search bar');
  //     setQuery('');
  //   };

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
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className='col-span-1 px-3 py-1 text-white rounded-md bg-primary'>
          Buscar
        </button>
      </div>
    </form>
  );
};

export default Search;
