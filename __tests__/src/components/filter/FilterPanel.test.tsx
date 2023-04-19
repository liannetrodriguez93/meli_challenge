import FilterPanel from '@components/filter/FilterPanel';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  mockFilterBarClose,
  mockStoreFetchProductList,
  mockStoreInitialFetchProductInfo,
  mockStoreLoadFetchProductList,
} from '../../../../__mocks__/fetchProductMock';

jest.mock('next/router', () => require('next-router-mock'));

const mockDispatch = jest.fn();
jest.mock('@hooks/useHookApp', () => ({
  ...jest.requireActual('@hooks/useHookApp'),
  useAppDispatch: () => mockDispatch,
}));

const mockOpenFilterBar = jest.fn();
jest.mock('@reduxConfig/feature/filterBar/filterBarSlice', () => ({
  setOpenFilterBar: () => mockOpenFilterBar(),
}));

const mockStore = configureMockStore([thunk]);

describe('FilterPanel', () => {
  let store;

  beforeEach(() => jest.clearAllMocks());

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: window.innerWidth,
    });
  });

  it('test_renders_correctly_with_available_filters_and_filter_selected', () => {
    const availableFilters = [
      { id: '1', name: 'Filter 1', type: 'type 1', values: [] },
      { id: '2', name: 'Filter 2', type: 'type 2', values: [] },
    ];
    const filterSelected = [
      { id: '3', name: 'Filter 3', type: 'type 3', values: [] },
      { id: '4', name: 'Filter 4', type: 'type 4', values: [] },
    ];

    store = mockStore({
      productList: {
        ...mockStoreLoadFetchProductList,
        filterSelected,
        availableFilters,
      },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    );
    expect(screen.getByText('Filtro seleccionado(s):')).toBeInTheDocument();
    expect(screen.getByText('Filtrar por:')).toBeInTheDocument();
    expect(screen.getAllByTestId('filter-selected')).toHaveLength(
      filterSelected.length
    );
    expect(screen.getAllByRole('link')).toHaveLength(availableFilters.length);
  });

  //Tests that clicking the button calls handleOpenFilterBar and dispatches setOpenFilterBar on small screens.
  it('test_button_click_behavior', () => {
    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    );

    const closeButton = screen.getAllByRole('button');
    expect(closeButton[0]).toBeVisible();
    fireEvent.click(closeButton[0]);
    expect(mockOpenFilterBar).toHaveBeenCalled();
  });

  // Tests that the component renders correctly when given empty arrays for availableFilters and filterSelected.
  it('test_empty_filters', () => {
    const availableFilters = null;
    const filterSelected = null;

    store = mockStore({
      productList: {
        ...mockStoreLoadFetchProductList,
        filterSelected,
        availableFilters,
      },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    );
    expect(screen.queryByText('No hay filtro disponible')).toBeInTheDocument();
  });

  // Tests that the component renders correctly when given an option with values of length less than or equal to 8.
  it('test_option_values_length', () => {
    const availableFilters = [
      {
        id: '1',
        name: 'Filter 1',
        type: 'type 1',
        values: [{ id: '1', name: 'Value 1' }],
      },
      {
        id: '2',
        name: 'Filter 2',
        type: 'type 2',
        values: [{ id: '2', name: 'Value 2' }],
      },
    ];
    const filterSelected = [];

    store = mockStore({
      productList: {
        ...mockStoreLoadFetchProductList,
        filterSelected,
        availableFilters,
      },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    );
    expect(screen.getByText('Filtrar por:')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(availableFilters.length);
  });

  // Tests that the component renders the correct number of FilterSelected components and passes the correct props to them based on the filterSelected array.
  it('test_filter_selected_behavior', () => {
    const availableFilters = [
      { id: '1', name: 'Filter 1', type: 'type 1', values: [] },
      { id: '2', name: 'Filter 2', type: 'type 2', values: [] },
    ];
    const filterSelected = [
      { id: '3', name: 'Filter 3', type: 'type 3', values: [] },
      { id: '4', name: 'Filter 4', type: 'type 4', values: [] },
    ];

    store = mockStore({
      productList: {
        ...mockStoreLoadFetchProductList,
        filterSelected,
        availableFilters,
      },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    );
    expect(screen.getAllByRole('link')).toHaveLength(filterSelected.length);
    filterSelected.forEach((filter) => {
      expect(screen.getByText(filter.name)).toBeInTheDocument();
    });
  });

  // Tests that the component renders the correct number of FilterBlock components and passes the correct props to them based on the availableFilters array.
  it('test_filter_block_behavior', () => {
    const availableFilters = [
      {
        id: '1',
        name: 'Filter 1',
        type: 'type 1',
        values: [{ id: '1', name: 'Value 1' }],
      },
      {
        id: '2',
        name: 'Filter 2',
        type: 'type 2',
        values: [{ id: '2', name: 'Value 2' }],
      },
    ];
    const filterSelected = [];

    store = mockStore({
      productList: {
        ...mockStoreLoadFetchProductList,
        filterSelected,
        availableFilters,
      },
      filterBar: mockFilterBarClose,
      productInfo: mockStoreInitialFetchProductInfo,
    });

    render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    );
    expect(screen.getAllByRole('link')).toHaveLength(availableFilters.length);
    availableFilters.forEach((option) => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
    });
  });
});
