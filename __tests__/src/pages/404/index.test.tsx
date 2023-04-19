import { render, screen } from '@testing-library/react';
import Custom404 from '../../../../src/pages/404';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

it('test_renders_without_errors', () => {
  render(<Custom404 />);
  expect(screen.getByText('Volver a la página de inicio')).toBeInTheDocument();
});

it('test_homepage_link_displayed_clickable', () => {
  render(<Custom404 />);
  const link = screen.getByRole('link', {
    name: 'Volver a la página de inicio',
  });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/');
});

it('test_styling_classes_valid', () => {
  render(<Custom404 />);
  const notFound = screen.getByTestId('not-found-page');
  expect(notFound).toHaveClass(
    'grid items-end justify-center w-full h-full bg-center bg-no-repeat bg-contain -left-5'
  );
  const link = screen.getByRole('link', {
    name: 'Volver a la página de inicio',
  });
  expect(link).toHaveClass(
    'relative h-10 px-4 py-2 font-bold text-white rounded bottom-6 w-fit bg-primary hover:bg-secondary'
  );
});

it('test_background_image_displayed', () => {
  render(<Custom404 />);
  const notFound = screen.getByTestId('not-found-page');
  expect(notFound).toHaveStyle({ backgroundImage: "url('/notFound.jpg')" });
});
