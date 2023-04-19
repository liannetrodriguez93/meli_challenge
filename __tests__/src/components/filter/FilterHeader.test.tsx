import FilterHeader from '@components/filter/FilterHeader';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {
  mockFilterBarClose,
  mockStoreFetchProductInfo,
  mockStoreFetchProductList,
} from '../../../../__mocks__/fetchProductMock';

jest.mock('next/router', () => require('next-router-mock'));
const mockDispatch = jest.fn();
jest.mock('@hooks/useHookApp', () => ({
  ...jest.requireActual('@hooks/useHookApp'),
  useAppDispatch: () => mockDispatch,
}));
const mockStore = configureMockStore();

describe('FilterHeader', () => {
  let store;

  beforeEach(() => jest.clearAllMocks());

  it('test_header_text_displayed_correctly', () => {
    store = mockStore({
      productList: mockStoreFetchProductList,
      filterBar: mockFilterBarClose,
      productInfo: mockStoreFetchProductInfo,
    });

    const { getByText } = render(
      <Provider store={store}>
        <FilterHeader />
      </Provider>
    );
    const headerText = getByText(/resultados para/);
    expect(headerText).toBeInTheDocument();
  });

  // Tests that clicking the filter button opens the filter bar.
  // it('test_filter_button_opens_filter_bar', () => {
  //   const { getByRole, getByTestId } = render(<FilterHeader />);
  //   const filterButton = getByTestId('filter-button');
  //   fireEvent.click(filterButton);
  //   const filterBar = getByRole('dialog');
  //   expect(filterBar).toBeInTheDocument();
  // });

  // Tests that the initial and final element numbers are calculated correctly.
  // it('test_initial_and_final_element_numbers', () => {
  //   const { getByText } = render(<FilterHeader />);
  //   const headerText = getByText(/resultados para/).textContent;
  //   const regex = /(\d+) - (\d+)/;
  //   const match = headerText.match(regex);
  //   const initialElement = parseInt(match[1]);
  //   const finalElement = parseInt(match[2]);
  //   expect(initialElement).toBeGreaterThanOrEqual(1);
  //   expect(finalElement).toBeGreaterThanOrEqual(initialElement);
  // });

  // Tests that the correct total number of results is displayed.
  // it('test_total_number_of_results_displayed', () => {
  //   const { getByText } = render(<FilterHeader />);
  //   const headerText = getByText(/resultados para/).textContent;
  //   const regex = /de (\d+)/;
  //   const match = headerText.match(regex);
  //   if (match) {
  //     const totalResults = parseInt(match[1]);
  //     expect(totalResults).toBeGreaterThanOrEqual(0);
  //   }
  // });

  // Tests that the setOpenFilterBar action is dispatched when the filter button is clicked.
  // it('test_dispatches_setopenfilterbar_action', () => {
  //   const dispatchMock = jest.fn();
  //   useAppDispatch.mockReturnValue(dispatchMock);
  //   const { getByTestId } = render(<FilterHeader />);
  //   const filterButton = getByTestId('filter-button');
  //   fireEvent.click(filterButton);
  //   expect(dispatchMock).toHaveBeenCalledWith(setOpenFilterBar());
  // });

  // Tests that the SortBy component is rendered.
  // it('test_sortby_component_rendered', () => {
  //   const { getByTestId } = render(<FilterHeader />);
  //   const sortByComponent = getByTestId('sort-by-component');
  //   expect(sortByComponent).toBeInTheDocument();
  // });
});
