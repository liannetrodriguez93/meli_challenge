import ProductList from '@components/product/ProductList';
import { render } from '@testing-library/react';
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

describe('ProductList', () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRouter.push('/search?q=test');
  });

  // Tests that the ProductList component maps over the products array and renders a Product component for each product.
  it('test_product_list_maps_over_products_and_renders_product_component', () => {
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ];

    store = mockStore({
      productList: { ...mockStoreInitialFetchProductList, products },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreFetchProductInfo,
    });

    const { getAllByTestId } = render(
      <Provider store={store}>
        <ProductList products={products} />
      </Provider>
    );
    const productComponents = getAllByTestId('product-component');
    expect(productComponents.length).toBe(products.length);
  });

  // Tests that the ProductList component renders a div with a grid layout.
  it('test_product_list_renders_div_with_grid_layout', () => {
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
    ];

    store = mockStore({
      productList: { ...mockStoreInitialFetchProductList, products },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreFetchProductInfo,
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <ProductList products={products} />
      </Provider>
    );
    const productListDiv = getByTestId('product-list-div');
    expect(productListDiv).toHaveClass('grid');
    expect(productListDiv).toHaveClass('grid-cols-1');
    expect(productListDiv).toHaveClass('gap-4');
    expect(productListDiv).toHaveClass('h-min');
    expect(productListDiv).toHaveClass('md:grid-cols-2');
    expect(productListDiv).toHaveClass('lg:grid-cols-3');
    expect(productListDiv).toHaveClass('xl:grid-cols-4');
  });
});
