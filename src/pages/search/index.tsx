'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/useHookApp';
import SearchResults from '@components/search/SearchResult';
import Loader from '@components/share/Loader';
import { useRouter } from 'next/router';
import { fetchProductList } from '@reduxConfig/feature/product/productThunk/meliThunk';
import ErrorPage from '@components/share/ErrorPage';

const ProductListResult = () => {
  const { loading, error } = useAppSelector((state) => state.productList);
  const { query, asPath } = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isSearchQuery = query.q;
    if (!!isSearchQuery) {
      const newQuery = asPath.split('?')[1];
      dispatch(fetchProductList(newQuery));
    }
  }, [query]);

  if (loading) {
    return <Loader loading={loading} />;
  } else if (error) {
    return <ErrorPage />;
  }

  return <SearchResults />;
};

export default ProductListResult;
