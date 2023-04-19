import FilterBlockItem from '@components/filter/FilterBlockItem';
import { render } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

describe('FilterBlockItem', () => {
  it('test_filter_block_item_renders_correctly', () => {
    const item = { id: '123', name: 'Test Item', results: 10 };
    const optionId = 'testOption';
    const { getByText } = render(
      <FilterBlockItem item={item} optionId={optionId} />
    );
    expect(getByText(item.name)).toBeInTheDocument();
    expect(getByText(`(${item.results})`)).toBeInTheDocument();
  });

  it('test_filter_block_item_same_option_id_queries', () => {
    const item = { id: '123', name: 'Test Item', results: 10 };
    const optionId = 'testOption';
    const { getByText } = render(
      <FilterBlockItem item={item} optionId={optionId} />
    );
    expect(getByText(item.name)).toBeInTheDocument();
    expect(getByText(`(${item.results})`)).toBeInTheDocument();
  });
});
