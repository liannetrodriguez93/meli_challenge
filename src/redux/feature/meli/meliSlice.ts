'use client';

import { Result } from '@interfaces/MeliReq';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from './meliThunk';
import { IAvailableFilters } from '@interfaces/IAvailableFilters';
import { IPaginResults } from '@interfaces/IPaginResults';

export interface MeliState {
  loading: boolean;
  data: Result[];
  availableFilters: IAvailableFilters[] | null;
  query: string | null;
  pagin: IPaginResults | null;
  error: string | null;
}

const initialState: MeliState = {
  loading: true,
  data: [],
  availableFilters: [],
  query: null,
  pagin: null,
  error: null,
};

export const meliSlice = createSlice({
  name: 'meliSlice',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string | null>) => {
      state.query = action.payload;
    },
    setFilters: (state, action: PayloadAction<IAvailableFilters[] | null>) => {
      state.availableFilters = action.payload;
    },
    setPaginResults: (state, action: PayloadAction<IPaginResults | null>) => {
      state.pagin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<Result[]>) => {
          state.loading = false;
          state.error = null;
          state.data = action.payload;
        }
      )
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong.';
      });
  },
});

export const { setQuery, setFilters, setPaginResults } = meliSlice.actions;

export default meliSlice.reducer;
