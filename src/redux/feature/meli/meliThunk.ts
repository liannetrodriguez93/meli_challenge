import { createAsyncThunk } from '@reduxjs/toolkit';
import { MeliReq } from '@interfaces/MeliReq';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (query: string, _) => {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=:${query}&limit=10`
    );
    const data: MeliReq = await response.json();
    return data.results;
  }
);
