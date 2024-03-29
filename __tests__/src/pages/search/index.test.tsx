import { render } from '@testing-library/react';
import { fetchProductList } from '@reduxConfig/feature/product/productThunk/meliThunk';
import mockRouter from 'next-router-mock';
import { Provider } from 'react-redux';
import ProductListResult from '../../../../src/pages/search';
import {
  mockFilterBarClose,
  mockStoreErrorFetchProductList,
  mockStoreFetchProductList,
  mockStoreInitialFetchProductInfo,
  mockStoreInitialFetchProductList,
  mockStoreLoadFetchProductList,
} from '../../../../__mocks__/fetchProductMock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('next/router', () => require('next-router-mock'));

const mockDispatch = jest.fn();
jest.mock('@hooks/useHookApp', () => ({
  ...jest.requireActual('@hooks/useHookApp'),
  useAppDispatch: () => mockDispatch,
}));

jest.mock('@reduxConfig/feature/product/productThunk/meliThunk');

jest.mock('react-modal', () => {
  const originalModal = jest.requireActual('react-modal');
  return {
    ...originalModal,
    setAppElement: jest.fn(),
  };
});

const mockStore = configureMockStore([thunk]);

describe('ProductListResult component', () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRouter.push('/search?q=test');
  });

  it('test_dispatch_has_keys', () => {
    store = mockStore({
      productList: mockStoreInitialFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    render(
      <Provider store={store}>
        <ProductListResult />
      </Provider>
    );

    expect(mockDispatch).toHaveBeenCalledWith(fetchProductList('q=test'));
  });

  it('test_dont_dispatch_when_no_keys', () => {
    mockRouter.push('/search');

    store = mockStore({
      productList: mockStoreInitialFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    render(
      <Provider store={store}>
        <ProductListResult />
      </Provider>
    );

    expect(mockDispatch).not.toHaveBeenCalledWith(fetchProductList);
  });

  it('test_render_searchResult_when_loading_false_error_false', () => {
    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    const { queryByTestId } = render(
      <Provider store={store}>
        <ProductListResult />
      </Provider>
    );
    expect(queryByTestId('search-results')).toBeInTheDocument();
  });

  it('test_render_ErrorPage_when_error', async () => {
    store = mockStore({
      productList: mockStoreErrorFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    const { queryByTestId } = render(
      <Provider store={store}>
        <ProductListResult />
      </Provider>
    );

    expect(queryByTestId('error-page')).toBeInTheDocument();
  });

  it('test_loading_true', () => {
    store = mockStore({
      productList: mockStoreLoadFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    const { queryByTestId } = render(
      <Provider store={store}>
        <ProductListResult />
      </Provider>
    );

    expect(queryByTestId('loader')).toBeInTheDocument();
  });
});
