import { PayloadAction } from '@reduxjs/toolkit';

import { IMeliReq } from '@interfaces/IMeliReq';
import { fetchProductList } from '@reduxConfig/feature/product/productThunk/meliThunk';
import productListReducer, {
  ProductListState,
} from '@reduxConfig/feature/product/productSlices/productListSlice';
import {
  mockAPIRequest,
  mockStoreInitialFetchProductList,
} from '../../../../../../__mocks__/fetchProductMock';

describe('productListSlice reducer', () => {
  it('should return the initial state', () => {
    expect(productListReducer(undefined, {} as PayloadAction)).toEqual(
      mockStoreInitialFetchProductList
    );
  });

  it('should handle fetchProductList.pending', () => {
    const action = { type: fetchProductList.pending.type };
    const expectedState: ProductListState = {
      ...mockStoreInitialFetchProductList,
      loading: true,
    };
    expect(
      productListReducer(mockStoreInitialFetchProductList, action)
    ).toEqual(expectedState);
  });

  it('should handle fetchProductList.fulfilled', () => {
    const payload: IMeliReq = mockAPIRequest;
    const action: PayloadAction<IMeliReq> = {
      type: fetchProductList.fulfilled.type,
      payload,
    };
    const expectedState: ProductListState = {
      ...mockStoreInitialFetchProductList,
      loading: false,
      products: payload.results,
      filterSelected: payload.filters,
      availableFilters: payload.available_filters,
      sortSelected: payload.sort,
      availableSorts: payload.available_sorts,
      paging: payload.paging,
    };
    expect(
      productListReducer(mockStoreInitialFetchProductList, action)
    ).toEqual(expectedState);
  });

  it('should handle fetchProductList.rejected', () => {
    const error = { message: 'Error fetching product list' };
    const action: PayloadAction<
      undefined,
      string,
      undefined,
      { message: string }
    > = {
      type: fetchProductList.rejected.type,
      error,
    };
    const expectedState: ProductListState = {
      ...mockStoreInitialFetchProductList,
      loading: false,
      error: error.message,
    };
    expect(
      productListReducer(mockStoreInitialFetchProductList, action)
    ).toEqual(expectedState);
  });
});
