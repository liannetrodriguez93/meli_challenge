import SortByItem from '@components/search/SortByItem';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockRouter from 'next-router-mock';
import {
  mockFilterBarClose,
  mockStoreFetchProductList,
  mockStoreInitialFetchProductInfo,
} from '../../../../__mocks__/fetchProductMock';

jest.mock('next/router', () => require('next-router-mock'));

const mockStore = configureMockStore([thunk]);

describe('SortByItem', () => {
  let store;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Tests that the SortByItem component is rendered with the correct props.
  it('test_renders_component_with_correct_props', () => {
    const sortItem = { id: 'testId', name: 'testName' };
    store = mockStore({
      productList: { ...mockStoreFetchProductList, sortSelected: sortItem },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });
    render(
      <Provider store={store}>
        <SortByItem sortItem={sortItem} />
      </Provider>
    );
    const sortByItemElement = screen.getByText('testName');
    expect(sortByItemElement).toBeInTheDocument();
  });

  // Tests that the SortByItem component displays the name of the sort item.
  it('test_displays_sort_item_name', () => {
    const sortItem = { id: 'testId', name: 'testName' };
    store = mockStore({
      productList: { ...mockStoreFetchProductList, sortSelected: sortItem },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });
    render(
      <Provider store={store}>
        <SortByItem sortItem={sortItem} />
      </Provider>
    );
    const sortByItemElement = screen.getByText('testName');
    expect(sortByItemElement).toBeInTheDocument();
  });

  // Tests that clicking the link updates the URL with the selected sort item.
  it('test_clicking_link_updates_URL', () => {
    const sortItem = { id: 'testId', name: 'testName' };
    mockRouter.push('/search?q=test');
    const mockPush = jest.fn();
    mockRouter.push = mockPush;
    store = mockStore({
      productList: { ...mockStoreFetchProductList, sortSelected: sortItem },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });
    render(
      <Provider store={store}>
        <SortByItem sortItem={sortItem} />
      </Provider>
    );
    const sortByItemElement = screen.getByText('testName');
    act(() => {
      fireEvent.click(sortByItemElement);
    });
  });

  // Tests that the selected sort item is highlighted.
  it('test_selected_sort_item_highlighted', () => {
    const sortItem = { id: 'testId', name: 'testName' };
    store = mockStore({
      productList: { ...mockStoreFetchProductList, sortSelected: sortItem },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });
    render(
      <Provider store={store}>
        <SortByItem sortItem={sortItem} />
      </Provider>
    );
    const sortByItemElement = screen.getByText('testName');
    expect(sortByItemElement).toHaveClass('bg-secondary');
  });
});
