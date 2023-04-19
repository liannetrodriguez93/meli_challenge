import ProductInfo from '@components/product/ProductInfo';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockRouter from 'next-router-mock';
import { Provider } from 'react-redux';
import {
  mockFilterBarClose,
  mockStoreFetchProductInfo,
  mockStoreInitialFetchProductList,
} from '../../../../__mocks__/fetchProductMock';

const mockDispatch = jest.fn();
jest.mock('@hooks/useHookApp', () => ({
  ...jest.requireActual('@hooks/useHookApp'),
  useAppDispatch: () => mockDispatch,
}));
jest.mock('next/router', () => require('next-router-mock'));
const mockStore = configureMockStore([thunk]);

describe('ProductInfo', () => {
  let mockUseRouter: any;
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRouter.push('/search?q=test');
  });

  // Tests that the ProductInfo component renders correctly with all required elements and props.
  it('test_product_info_renders_correctly', () => {
    const selectedProductInfo = {
      title: 'Test Product',
      price: 10.99,
      original_price: 15.99,
      thumbnail_id: '12345',
      shipping: {
        free_shipping: true,
      },
    };

    store = mockStore({
      productList: mockStoreInitialFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: {
        ...mockStoreFetchProductInfo,
        selectedProductInfo,
      },
    });

    render(
      <Provider store={store}>
        <ProductInfo />
      </Provider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$10.99')).toBeInTheDocument();
    expect(screen.getByText('$15.99')).toBeInTheDocument();
    expect(screen.getByText('-31%')).toBeInTheDocument();
    expect(screen.getByText('Envío gratis')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Añadir al carrito' })
    ).toBeInTheDocument();
  });

  // Tests that the ProductInfo component correctly displays free shipping when selectedProductInfo has free_shipping property.
  it('test_product_info_free_shipping', () => {
    const selectedProductInfo = {
      title: 'Test Product',
      price: 10.99,
      original_price: 15.99,
      thumbnail_id: '12345',
      shipping: {
        free_shipping: true,
      },
    };

    store = mockStore({
      productList: mockStoreInitialFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: {
        ...mockStoreFetchProductInfo,
        selectedProductInfo,
      },
    });

    render(
      <Provider store={store}>
        <ProductInfo />
      </Provider>
    );

    expect(screen.getByText('Envío gratis')).toHaveClass(
      'bg-secondary text-white'
    );
  });

  // Tests that the ProductInfo component handles gracefully the case when selectedProductInfo is missing required properties.
  it('test_product_info_missing_props', () => {
    const selectedProductInfo = {
      title: 'Test Product',
      price: 10.99,
      thumbnail_id: '12345',
    };

    store = mockStore({
      productList: mockStoreInitialFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: {
        ...mockStoreFetchProductInfo,
        selectedProductInfo,
      },
    });

    render(
      <Provider store={store}>
        <ProductInfo />
      </Provider>
    );

    expect(screen.queryByText('$15.99')).not.toBeInTheDocument();
    expect(screen.queryByText('-31%')).not.toBeInTheDocument();
  });
});
