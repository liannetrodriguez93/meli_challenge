import Product from '@components/product/Product';
import { fireEvent, render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import mockRouter from 'next-router-mock';
import {
  mockFilterBarClose,
  mockProduct,
  mockStoreInitialFetchProductInfo,
  mockStoreInitialFetchProductList,
} from '../../../../__mocks__/fetchProductMock';
import { act } from 'react-dom/test-utils';

const mockDispatch = jest.fn();
jest.mock('@hooks/useHookApp', () => ({
  ...jest.requireActual('@hooks/useHookApp'),
  useAppDispatch: () => mockDispatch,
}));
jest.mock('next/router', () => require('next-router-mock'));
const mockStore = configureMockStore([thunk]);

jest.mock('react-modal', () => {
  const originalModal = jest.requireActual('react-modal');
  return {
    ...originalModal,
    setAppElement: jest.fn(),
  };
});

describe('Product', () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRouter.push('/search?q=test');
  });

  // Tests that the Product component renders correctly with valid props.
  it('test_product_renders_correctly', () => {
    const product = {
      id: '123',
      title: 'Test Product',
      price: 10,
      original_price: 15,
      thumbnail_id: '456',
      available_quantity: 5,
    };
    store = mockStore({
      productList: mockStoreInitialFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });
    render(
      <Provider store={store}>
        <Product product={product} />
      </Provider>
    );
    const productTitle = screen.getByText('Test Product');
    expect(productTitle).toBeInTheDocument();
  });

  // Tests that handleViewClick dispatches the correct actions when called.
  it('test_handle_view_click_dispatches_actions', () => {
    store = mockStore({
      productList: mockStoreInitialFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    render(
      <Provider store={store}>
        <Product product={mockProduct} />
      </Provider>
    );
    const viewButton = screen.getAllByTestId('square-icon-button');
    act(() => {
      fireEvent.click(viewButton[0]);
    });
    expect(mockDispatch).toHaveBeenCalledTimes(3);
  });
});
