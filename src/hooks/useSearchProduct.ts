'use client';

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { useRouter } from 'next/router';
import { fetchData } from '@reduxConfig/feature/meli/meliThunk';

const useSearchProduct = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { query: queryInit } = useAppSelector((state) => state.meli);

  useEffect(() => {
    setQuery(queryInit);
  }, [queryInit]);

  const handleSetQuery = (query: string) => setQuery(query);

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

  return {
    query,
    handleSetQuery,
    handleSubmit,
    handleKeyDown,
  };
};

export default useSearchProduct;
