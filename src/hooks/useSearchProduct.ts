'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useSearchProduct = () => {
  const [queryValue, setQueryValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    const newQuery = router.query.q?.toString() ?? '';
    setQueryValue(newQuery);
  }, [router.query]);

  const handleSetQuery = (query: string) => setQueryValue(query);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (queryValue.trimStart() !== '') {
      router.push({
        pathname: '/search',
        query: { q: queryValue },
      });
    }
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
    queryValue,
    handleSetQuery,
    handleSubmit,
    handleKeyDown,
  };
};

export default useSearchProduct;
