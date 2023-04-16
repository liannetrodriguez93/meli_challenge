import { createAsyncThunk } from '@reduxjs/toolkit';
import { MeliReq } from '@interfaces/MeliReq';
import { setFilters, setPaginResults, setQuery } from './meliSlice';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (query: string, { dispatch }) => {
    console.log('fetchData', query);
    dispatch(setQuery(query));
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=:${query}&limit=20&offset=1`
    );
    const data: MeliReq = await response.json();
    dispatch(setFilters(data.available_filters));
    dispatch(setPaginResults(data.paging));
    return data.results;
  }
);
