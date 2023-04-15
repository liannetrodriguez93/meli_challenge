import { createAsyncThunk } from '@reduxjs/toolkit';
import { MeliReq } from '@interfaces/MeliReq';
import { setFilters, setQuery } from './meliSlice';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (query: string, { dispatch }) => {
    dispatch(setQuery(query));
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=:${query}&limit=50`
    );
    const data: MeliReq = await response.json();
    dispatch(setFilters(data.available_filters));
    return data.results;
  }
);
