'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/useHookApp';
import SearchResults from '@components/search/SearchResult';
import Loader from '@components/share/Loader';
import { useRouter } from 'next/router';
import { fetchProductList } from '@reduxConfig/feature/product/productThunk/meliThunk';
import ErrorPage from '@components/share/ErrorPage';

const ProductList = () => {
  const { loading, error } = useAppSelector((state) => state.productListSlice);
  const { query, asPath } = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Object.keys(query).length > 0) {
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

export default ProductList;
