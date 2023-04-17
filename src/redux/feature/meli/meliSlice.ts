'use client';

import { Filter, Result } from '@interfaces/MeliReq';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from './meliThunk';
import { IAvailableFilters } from '@interfaces/IAvailableFilters';
import { IPaginResults } from '@interfaces/IPaginResults';

export interface MeliState {
  loading: boolean;
  data: Result[];
  availableFilters: IAvailableFilters[];
  filterSelected: Filter[];
  pagin: IPaginResults | null;
  error: string | null;
}

const initialState: MeliState = {
  loading: true,
  data: [],
  availableFilters: [],
  filterSelected: [],
  pagin: null,
  error: null,
};

export const meliSlice = createSlice({
  name: 'meliSlice',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IAvailableFilters[]>) => {
      state.availableFilters = action.payload;
    },
    setPaginResults: (state, action: PayloadAction<IPaginResults | null>) => {
      state.pagin = action.payload;
    },
    setFilterSelected: (state, action: PayloadAction<Filter[]>) => {
      state.filterSelected = action.payload;
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

export const { setFilters, setPaginResults, setFilterSelected } =
  meliSlice.actions;

export default meliSlice.reducer;
