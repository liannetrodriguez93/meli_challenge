import ProductTableAtributes from '@components/product/ProductTable';
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

describe('ProductTable', () => {
  let mockUseRouter: any;
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRouter.push('/search?q=test');

    mockUseRouter = jest.fn(() => ({
      query: { q: 'test' },
      asPath: '/search?q=test',
    }));

    jest.mock('next/router', () => ({ useRouter: mockUseRouter }));
  });

  // Tests that the function renders a table with attributes when selectedProductInfo has attributes.
  it('test_selected_product_info_has_attributes', () => {
    const mockSelectedProductInfo = {
      attributes: [
        {
          id: '1',
          name: 'Color',
          value_id: '2',
          value_name: 'Red',
          value_struct: null,
          values: [],
          attribute_group_id: '',
          attribute_group_name: '',
          value_type: '',
        },
        {
          id: '2',
          name: 'Size',
          value_id: '3',
          value_name: 'Medium',
          value_struct: null,
          values: [],
          attribute_group_id: '',
          attribute_group_name: '',
          value_type: '',
        },
      ],
    };
    store = mockStore({
      productList: mockStoreInitialFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: {
        ...mockStoreFetchProductInfo,
        selectedProductInfo: {
          ...mockStoreFetchProductInfo,
          attributes: mockSelectedProductInfo.attributes,
        },
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <ProductTableAtributes />
      </Provider>
    );
    expect(getByText('Color')).toBeInTheDocument();
    expect(getByText('Red')).toBeInTheDocument();
    expect(getByText('Size')).toBeInTheDocument();
    expect(getByText('Medium')).toBeInTheDocument();
  });

  // Tests that the function handles null or undefined values for item name or value_name.
  it('test_item_has_null_or_undefined_name_or_value_name', () => {
    const mockSelectedProductInfo = {
      attributes: [
        {
          id: '1',
          name: null,
          value_id: '2',
          value_name: 'Red',
          value_struct: null,
          values: [],
          attribute_group_id: '',
          attribute_group_name: '',
          value_type: '',
        },
        {
          id: '2',
          name: 'Size',
          value_id: '3',
          value_name: null,
          value_struct: null,
          values: [],
          attribute_group_id: '',
          attribute_group_name: '',
          value_type: '',
        },
      ],
    };
    store = mockStore({
      productList: mockStoreInitialFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: {
        ...mockStoreFetchProductInfo,
        selectedProductInfo: {
          ...mockStoreFetchProductInfo,
          attributes: mockSelectedProductInfo.attributes,
        },
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <ProductTableAtributes />
      </Provider>
    );
    expect(getByText('Size')).toBeInTheDocument();
    expect(getByText('-')).toBeInTheDocument();
  });
});
