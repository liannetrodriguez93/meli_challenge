import FilterSelected from '@components/filter/FilterSelected';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('FilterSelected', () => {
  // Tests that the FilterSelected component renders the filter name and a button to remove it.
  it('test_filter_selected_renders_correctly', () => {
    const filter = { id: '1', name: 'Test Filter' };
    const { getByTestId, getByText } = render(
      <FilterSelected id={filter.id} name={filter.name} />
    );
    const filterSelected = getByTestId('filter-selected');
    const filterName = getByText('Test Filter');
    const removeButton = getByText('X');
    expect(filterSelected).toBeInTheDocument();
    expect(filterName).toBeInTheDocument();
    expect(removeButton).toBeInTheDocument();
  });

  // Tests that onClick on the remove button triggers a navigation to the updated query.
  it('test_filter_selected_removes_filter', async () => {
    const filter = { id: 'sort', name: 'Test' };
    mockRouter.push(
      `/search?q=value&query2=value2&sort=${encodeURIComponent('Test Filter')}`
    );
    const { getByRole } = render(
      <FilterSelected id={filter.id} name={filter.name} />
    );

    const removeButton = getByRole('link');
    act(() => {
      fireEvent.click(removeButton);
    });

    // await waitFor(() => {
    expect(mockRouter).toMatchObject({
      asPath: '/search?q=value&query2=value2&sort=Test%20Filter',
      pathname: '/search',
      query: { q: 'value', query2: 'value2' },
    });
    // });
  });
});
