import ProductDetail from '@components/product/ProductDetail';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  mockFilterBarClose,
  mockStoreFetchProductInfo,
  mockStoreFetchProductList,
} from '../../../../__mocks__/fetchProductMock';
import { Providers } from '@reduxConfig/provider';

const mockStore = configureMockStore([thunk]);

describe('ProductDetail', () => {
  let store;

  // Tests that the ProductDetail component renders correctly with valid input.
  it('test_product_detail_renders_correctly', () => {
    render(<ProductDetail />);
    const description = screen.getByText(/Descripción/i);
    expect(description).toBeInTheDocument();
  });

  // Tests that the selectedProductDetail exists and has a plain_text property.
  it('test_selected_product_detail_exists_and_has_plain_text', () => {
    const mockState = {
      selectedProductDetail: {
        plain_text: 'This is a test description',
      },
    };
    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: {
        ...mockStoreFetchProductInfo,
        selectedProductDetail: mockState.selectedProductDetail,
      },
    });
    render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );
    const description = screen.getByText(/This is a test description/i);
    expect(description).toBeInTheDocument();
  });

  // Tests that the component handles the case when selectedProductDetail is null/undefined.
  it('test_selected_product_detail_is_null_or_undefined', () => {
    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: {
        ...mockStoreFetchProductInfo,
        selectedProductDetail: null,
      },
    });

    render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );
    const description = screen.queryByText(/plain_text/i);
    expect(description).toBeNull();
  });

  // Tests that the selectedProductDetail exists but plain_text property is null/undefined.
  it('test_selected_product_detail_exists_but_plain_text_property_is_null', () => {
    const mockState = {
      selectedProductDetail: {
        plain_text: null,
      },
    };

    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: {
        ...mockStoreFetchProductInfo,
        selectedProductDetail: mockState.selectedProductDetail,
      },
    });

    render(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );
    const description = screen.queryByText(/plain_text/i);
    expect(description).toBeNull();
  });
});
