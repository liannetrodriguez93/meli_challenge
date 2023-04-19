'use client';

import {
  IAvailableFilter,
  IFilter,
  IMeliReq,
  IPaging,
  IResult,
  ISort,
} from '@interfaces/IMeliReq';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProductList } from '../productThunk/meliThunk';

export interface ProductListState {
  loading: boolean;
  products: IResult[];
  sortSelected: ISort | null;
  filterSelected: IFilter[];
  availableSorts: ISort[];
  availableFilters: IAvailableFilter[];
  paging: IPaging | null;
  error: string | null;
}

const initialState: ProductListState = {
  loading: true,
  products: [],
  sortSelected: null,
  filterSelected: [],
  availableSorts: [],
  availableFilters: [],
  paging: null,
  error: null,
};

export const productListSlice = createSlice({
  name: 'productListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProductList.fulfilled,
        (state, action: PayloadAction<IMeliReq>) => {
          state.loading = false;
          state.error = null;
          state.products = action.payload.results;
          state.filterSelected = [];
          state.availableFilters = [];
          state.sortSelected = action.payload.sort;
          state.availableSorts = action.payload.available_sorts;
          state.paging = action.payload.paging;
        }
      )
      .addCase(fetchProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong.';
      });
  },
});

export default productListSlice.reducer;
