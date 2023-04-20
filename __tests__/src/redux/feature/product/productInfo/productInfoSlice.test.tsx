import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { IProductInfo } from '@interfaces/IProductInfo';
import productInfoReducer, {
  ProductInfoState,
  setIsOpenModal,
} from '@reduxConfig/feature/product/productSlices/productInfoSlice';
import {
  fetchProductInfo,
  fetchProductDetail,
} from '@reduxConfig/feature/product/productThunk/meliThunk';
import { IProductDetail } from '@interfaces/IProductDetail';

const mockStore = configureMockStore<[ProductInfoState, any]>([thunk]);

describe('productInfoSlice', () => {
  describe('reducer', () => {
    it('should handle initial state', () => {
      expect(productInfoReducer(undefined, { type: '' })).toEqual({
        loading: true,
        isOpenModal: false,
        selectedProductInfo: null,
        selectedProductDetail: null,
        error: null,
      });
    });

    it('should handle setIsOpenModal', () => {
      let state = productInfoReducer(undefined, setIsOpenModal());
      expect(state.isOpenModal).toBe(true);

      state = productInfoReducer(state, setIsOpenModal());
      expect(state.isOpenModal).toBe(false);
    });

    it('should handle fetchProductInfo.pending', () => {
      const state = productInfoReducer(undefined, fetchProductInfo.pending());
      expect(state.loading).toBe(true);
    });

    it('should handle fetchProductInfo.fulfilled', () => {
      const productInfo: IProductInfo = {
        id: 'ML123',
        title: 'Product',
        price: 100,
      };
      const state = productInfoReducer(
        undefined,
        fetchProductInfo.fulfilled(productInfo)
      );
      expect(state.loading).toBe(false);
      expect(state.selectedProductInfo).toEqual(productInfo);
      expect(state.error).toBeNull();
    });

    it('should handle fetchProductInfo.rejected', () => {
      const errorMessage = 'Error fetching product info.';
      const state = productInfoReducer(
        undefined,
        fetchProductInfo.rejected({
          message: errorMessage,
        })
      );
      expect(state.loading).toBe(false);
      expect(state.selectedProductInfo).toBeNull();
      expect(state.error).toEqual(errorMessage);
    });

    it('should handle fetchProductDetail.fulfilled', () => {
      const productDetail: IProductDetail = {
        id: 'ML123',
        description: 'Product description',
      };
      const state = productInfoReducer(
        undefined,
        fetchProductDetail.fulfilled(productDetail)
      );
      expect(state.loading).toBe(false);
      expect(state.selectedProductDetail).toEqual(productDetail);
      expect(state.error).toBeNull();
    });

    it('should handle fetchProductDetail.rejected', () => {
      const errorMessage = 'Error fetching product detail.';
      const state = productInfoReducer(
        undefined,
        fetchProductDetail.rejected({
          message: errorMessage,
        })
      );
      expect(state.loading).toBe(false);
      expect(state.selectedProductDetail).toBeNull();
      expect(state.error).toEqual(errorMessage);
    });
  });

  describe('actions', () => {
    it('should dispatch setIsOpenModal', () => {
      const store = mockStore({
        loading: true,
        isOpenModal: false,
        selectedProductInfo: null,
        selectedProductDetail: null,
        error: null,
      });

      store.dispatch(setIsOpenModal());
      const actions = store.getActions();
      expect(actions).toEqual([{ type: 'productInfoSlice/setIsOpenModal' }]);
    });
  });
});
