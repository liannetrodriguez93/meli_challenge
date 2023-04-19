import SearchResults from '@components/search/SearchResult';
import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockRouter from 'next-router-mock';
import {
  mockFilterBarClose,
  mockStoreFetchProductList,
  mockStoreInitialFetchProductInfo,
  mockStoreInitialFetchProductList,
} from '../../../../__mocks__/fetchProductMock';

const mockStore = configureMockStore([thunk]);
jest.mock('react-modal', () => {
  const originalModal = jest.requireActual('react-modal');
  return {
    ...originalModal,
    setAppElement: jest.fn(),
  };
});
jest.mock('next/router', () => require('next-router-mock'));

describe('SearchResult', () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: window.innerWidth,
    });
  });

  // Tests that the function renders the product list and pagination bar when the products list is not empty.
  it('test_products_list_not_empty: renders the product list and pagination bar when the products list is not empty', () => {
    mockRouter.push('/search?q=test');
    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });
    const { getByTestId, getByRole } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );
    const searchResults = getByTestId('search-results');
    expect(searchResults).toBeInTheDocument();
    expect(searchResults).toContainElement(getByTestId('product-list-div'));
    expect(searchResults).toContainElement(getByRole('navigation'));
  });

  // Tests that the function renders the product not found component when the products list is empty.
  it('test_products_list_empty: renders the product not found component when the products list is empty', () => {
    store = mockStore({
      productList: mockStoreInitialFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });
    const { getByText } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );
    expect(getByText('No se encontraron resultados')).toBeInTheDocument();
  });

  // Tests that the sidebar is hidden when the screen size is less than 640px.
  it('test_screen_size_less_than_640px: hides the sidebar when the screen size is less than 640px', () => {
    const mockState = {
      productList: { products: [] },
      filterBar: { open: true },
    };
    const { container } = render(
      <Provider store={mockStore(mockState)}>
        <SearchResults />
      </Provider>
    );
    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event('resize'));
    });
    expect(
      container.querySelector('.grid.fixed.inset-y-0')
    ).not.toBeInTheDocument();
  });
});
