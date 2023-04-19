import { render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@hooks/useHookApp';
import { fetchProductList } from '@reduxConfig/feature/product/productThunk/meliThunk';
import mockRouter from 'next-router-mock';
import { Provider, TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import ProductListResult from '../../../../src/pages/search';
import { RootState } from '@reduxConfig/store';
import {
  mockFilterBarClose,
  mockStoreErrorFetchProductList,
  mockStoreFetchProductInfo,
  mockStoreFetchProductList,
} from '../../../../__mocks__/fetchProductMock';
import configureMockStore from 'redux-mock-store';
import { mockStoreLoadFetchProductList } from '../../../../__mocks__/fetchProductMock';
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
  let mockUseRouter: any;

  beforeEach(() => jest.clearAllMocks());

  it('test_query_object_has_keys', () => {
    mockRouter.push('/search?q=test');

    mockUseRouter = jest.fn(() => ({
      query: { q: 'test' },
      asPath: '/search?q=test',
    }));

    jest.mock('next/router', () => ({ useRouter: mockUseRouter }));

    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreFetchProductInfo,
    });

    render(
      <Provider store={store}>
        <ProductListResult />
      </Provider>
    );

    expect(mockDispatch).toHaveBeenCalledWith(fetchProductList('q=test'));
  });

  it('test_render_searchResult_when_loading_false_error_false', () => {
    mockRouter.push('/search?q=test');

    mockUseRouter = jest.fn(() => ({
      query: { q: 'test' },
      asPath: '/search?q=test',
    }));

    jest.mock('next/router', () => ({ useRouter: mockUseRouter }));

    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreFetchProductInfo,
    });

    const { queryByTestId } = render(
      <Provider store={store}>
        <ProductListResult />
      </Provider>
    );
    expect(queryByTestId('search-results')).toBeInTheDocument();
  });

  // Tests that the function renders ErrorPage component when fetchProductList returns an error.
  it('test_render_ErrorPage_when_error', async () => {
    mockRouter.push('/search?q=test');

    mockUseRouter = jest.fn(() => ({
      query: { q: 'test' },
      asPath: '/search?q=test',
    }));

    jest.mock('next/router', () => ({ useRouter: mockUseRouter }));

    store = mockStore({
      productList: mockStoreErrorFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreFetchProductInfo,
    });

    const { queryByTestId } = render(
      <Provider store={store}>
        <ProductListResult />
      </Provider>
    );

    expect(queryByTestId('error-page')).toBeInTheDocument();
  });

  //   // Tests that the function renders Loader component when loading is true.
  //   it('test_loading_true', () => {
  //     const mockUseRouter = jest.fn(() => ({ query: {}, asPath: '/test' }));
  //     const mockUseAppSelector = jest.fn(() => ({ loading: true, error: false }));
  //     jest.mock('next/router', () => ({ useRouter: mockUseRouter }));
  //     jest.mock('@hooks/useHookApp', () => ({
  //       useAppDispatch: jest.fn(),
  //       useAppSelector: mockUseAppSelector,
  //     }));
  //     const { queryByTestId } = render(<ProductListResult />);
  //     expect(queryByTestId('loader')).toBeInTheDocument();
  //   });
  //   // Tests that the function does not dispatch fetchProductList when the query object is empty.
  //   it('test_empty_query_object', () => {
  //     const mockDispatch = jest.fn();
  //     const mockUseRouter = jest.fn(() => ({ query: {}, asPath: '/search' }));
  //     const mockUseAppSelector = jest.fn(() => mockStoreFetchProductList);
  //     jest.mock('next/router', () => ({ useRouter: mockUseRouter }));
  //     jest.mock('@hooks/useHookApp', () => ({
  //       useAppDispatch: () => mockDispatch,
  //       useAppSelector: mockUseAppSelector,
  //     }));
  //     render(<ProductListResult />);
  //     expect(mockDispatch).not.toHaveBeenCalled();
  //   });
});
