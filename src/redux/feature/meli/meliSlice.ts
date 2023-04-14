'use client';

import { Result } from '@interfaces/MeliReq';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from './meliThunk';

export interface MeliState {
  loading: boolean;
  data: Result[];
  error: string | null;
}

const initialState: MeliState = {
  data: [],
  loading: false,
  error: null,
};

export const meliSlice = createSlice({
  name: 'meliSlice',
  initialState,
  reducers: {},
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

// export const {} = meliSlice.actions;

export default meliSlice.reducer;
