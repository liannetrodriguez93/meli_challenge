import { createAsyncThunk } from '@reduxjs/toolkit';
import { MeliReq } from '@interfaces/MeliReq';
import { setFilterSelected, setFilters, setPaginResults } from './meliSlice';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (query: string, { dispatch }) => {
    const newQuery = query.includes('offset')
      ? query
      : query.concat('&offset=1');
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?${newQuery}&limit=20`
    );
    const data: MeliReq = await response.json();
    dispatch(setFilters(data.available_filters));
    dispatch(setPaginResults(data.paging));
    dispatch(setFilterSelected(data.filters));
    return data.results;
  }
);
