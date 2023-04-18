import FilterBlock from '@components/filter/FilterBlock';
import { IAvailableFilter } from '@interfaces/IMeliReq';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

const getRandomNumber = () => {
  return Math.floor(Math.random() * 101);
};

describe('FilterBlock', () => {
  it('should render correctly', () => {
    const option: IAvailableFilter = {
      id: '1',
      name: 'Color',
      type: 'color',
      values: [
        { id: '1', name: 'Red', results: getRandomNumber() },
        { id: '2', name: 'Blue', results: getRandomNumber() },
      ],
    };
    const { getByText } = render(<FilterBlock option={option} />);

    expect(getByText(option.name)).toBeInTheDocument();
    expect(getByText(option.values[0].name)).toBeInTheDocument();
    expect(getByText(option.values[1].name)).toBeInTheDocument();
  });

  it('should only show the first 8 values if there are more than 8', () => {
    const option: IAvailableFilter = {
      id: '1',
      name: 'Size',
      type: 'text',
      values: [
        { id: '1', name: 'XS', results: getRandomNumber() },
        { id: '2', name: 'S', results: getRandomNumber() },
        { id: '3', name: 'M', results: getRandomNumber() },
        { id: '4', name: 'L', results: getRandomNumber() },
        { id: '5', name: 'XL', results: getRandomNumber() },
        { id: '6', name: 'XXL', results: getRandomNumber() },
        { id: '7', name: 'XXXL', results: getRandomNumber() },
        { id: '8', name: '4XL', results: getRandomNumber() },
        { id: '9', name: '5XL', results: getRandomNumber() },
      ],
    };
    const { getAllByRole } = render(<FilterBlock option={option} />);
    const items = getAllByRole('link');

    expect(items.length).toBe(8);
  });

  it('should render correctly with range values', () => {
    const option: IAvailableFilter = {
      id: '1',
      name: 'Price',
      type: 'range',
      values: [
        { id: '1', name: 'Less than $10', results: getRandomNumber() },
        { id: '2', name: '$10 to $50', results: getRandomNumber() },
        { id: '3', name: '$50 to $100', results: getRandomNumber() },
        { id: '4', name: '$100 to $500', results: getRandomNumber() },
        { id: '5', name: 'More than $500', results: getRandomNumber() },
      ],
    };
    const { getByText } = render(<FilterBlock option={option} />);

    expect(getByText(option.name)).toBeInTheDocument();
    expect(getByText(option.values[0].name)).toBeInTheDocument();
    expect(getByText(option.values[4].name)).toBeInTheDocument();
  });
});
