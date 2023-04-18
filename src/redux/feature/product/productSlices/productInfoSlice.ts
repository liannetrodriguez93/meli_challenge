'use client';

import { IMeliReq } from '@interfaces/IMeliReq';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchProductList,
  fetchProductInfo,
  fetchProductDetail,
} from '../productThunk/meliThunk';
import { IProductInfo } from '@interfaces/IProductInfo';
import { IProductDetail } from '../../../../interfaces/IProductDetail';

export interface MeliState {
  loading: boolean;
  isOpenModal: boolean;
  selectedProductInfo: IProductInfo | null;
  selectedProductDetail: IProductDetail | null;
  error: string | null;
}

const initialState: MeliState = {
  loading: true,
  isOpenModal: false,
  selectedProductInfo: null,
  selectedProductDetail: null,
  error: null,
};

export const productInfoSlice = createSlice({
  name: 'productInfoSlice',
  initialState,
  reducers: {
    setIsOpenModal(state) {
      state.isOpenModal = !state.isOpenModal;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProductInfo.fulfilled,
        (state, action: PayloadAction<IProductInfo>) => {
          state.selectedProductInfo = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProductInfo.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong.';
        state.loading = false;
      })
      .addCase(
        fetchProductDetail.fulfilled,
        (state, action: PayloadAction<IProductDetail>) => {
          state.selectedProductDetail = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong.';
        state.loading = false;
      });
  },
});

export const { setIsOpenModal } = productInfoSlice.actions;

export default productInfoSlice.reducer;
