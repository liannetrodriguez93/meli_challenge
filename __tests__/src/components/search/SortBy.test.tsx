import SortBy from '@components/search/SortBy';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  mockFilterBarClose,
  mockStoreFetchProductList,
  mockStoreInitialFetchProductInfo,
} from '../../../../__mocks__/fetchProductMock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('next/router', () => require('next-router-mock'));

const mockStore = configureMockStore([thunk]);

describe('SortBy', () => {
  let store;
  // Tests that the Popover button changes color and the Popover panel is shown when clicked.
  it('test_popover_button_click', () => {
    const productList = mockStoreFetchProductList;
    store = mockStore({
      productList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    const { getByRole, getAllByRole } = render(
      <Provider store={store}>
        <SortBy />
      </Provider>
    );
    const button = getByRole('button');
    act(() => {
      fireEvent.click(button);
    });
    expect(button).toHaveClass('text-blue-500');
    const panel = getAllByRole('link');
    expect(panel.length).toBe(productList.availableSorts.length);
  });

  // Tests that the SortByItem components are rendered with the correct props.
  it('test_sortbyitem_render', () => {
    const availableSorts = [
      { id: '1', name: 'Sort 1' },
      { id: '2', name: 'Sort 2' },
    ];
    store = mockStore({
      productList: { ...mockStoreFetchProductList, availableSorts },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });
    const { getByText } = render(
      <Provider store={store}>
        <SortBy />
      </Provider>
    );
    const button = getByText('Ordenar por:');
    act(() => {
      fireEvent.click(button);
    });
    act(() => {
      availableSorts.forEach((sort) => {
        expect(getByText(sort.name)).toBeInTheDocument();
      });
    });
  });

  // Tests that the component handles the case when availableSorts is empty.
  it('test_empty_available_sorts', () => {
    store = mockStore({
      productList: { ...mockStoreFetchProductList, availableSorts: [] },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });
    const { container } = render(
      <Provider store={store}>
        <SortBy />
      </Provider>
    );
    expect(container.firstChild).toBeNull();
  });
});
