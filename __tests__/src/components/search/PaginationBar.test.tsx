import PaginationBar from '@components/search/PaginationBar';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import mockRouter from 'next-router-mock';
import {
  mockFilterBarClose,
  mockStoreFetchProductList,
  mockStoreInitialFetchProductInfo,
} from '../../../../__mocks__/fetchProductMock';

jest.mock('next/router', () => require('next-router-mock'));

const mockStore = configureMockStore([thunk]);

describe('PaginationBar', () => {
  let store;
  let mockUseRouter: any;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRouter.push('/search?q=test');

    mockUseRouter = jest.fn(() => ({
      query: { q: 'test' },
      asPath: '/search?q=test',
    }));

    jest.mock('next/router', () => ({ useRouter: mockUseRouter }));
  });

  // Tests that the PaginationBar component renders correctly with valid input.
  it('test_pagination_bar_renders_correctly', () => {
    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    const { getByText } = render(
      <Provider store={store}>
        <PaginationBar />
      </Provider>
    );

    const page1 = getByText('1');
    const page2 = getByText('2');
    const page3 = getByText('3');
    const page4 = getByText('4');
    const page5 = getByText('5');

    expect(page1).toBeInTheDocument();
    expect(page2).toBeInTheDocument();
    expect(page3).toBeInTheDocument();
    expect(page4).toBeInTheDocument();
    expect(page5).toBeInTheDocument();
  });

  // Tests that clicking on pagination buttons updates the URL and renders new pages.
  it('test_pagination_buttons_update_url', () => {
    const mockPush = jest.fn();
    mockRouter.push = mockPush;

    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    const { getByRole } = render(
      <Provider store={store}>
        <PaginationBar />
      </Provider>
    );
    const page2 = getByRole('link', { name: '2' });

    fireEvent.click(page2);

    expect(mockPush).toHaveBeenCalled();
  });

  // Tests that the PaginationBar component disables buttons at the beginning and end.
  it('test_pagination_bar_disables_buttons', () => {
    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    const { getAllByTestId } = render(
      <Provider store={store}>
        <PaginationBar />
      </Provider>
    );
    const buttons = getAllByTestId('square-icon-button');

    // Assert
    expect(buttons[0]).toBeDisabled();
    expect(buttons[1]).not.toBeDisabled();
  });
});
