import Search from '@components/search/Search';
import { fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('Search', () => {
  // Tests that the form submits with a valid search query.
  it('test_search_submit', () => {
    const mockPush = jest.fn();
    mockRouter.push = mockPush;
    render(<Search />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/search',
      query: { q: 'test' },
    });
  });

  // Tests that the search query updates as the user types.
  it('test_search_query_updates', () => {
    render(<Search />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  // Tests that the form does not submit if the search query is empty or only contains whitespace characters.
  it('test_empty_search_query', () => {
    const mockPush = jest.fn();
    mockRouter.push = mockPush;
    render(<Search />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.submit(screen.getByRole('button'));
    expect(mockPush).not.toHaveBeenCalled();
  });
});
