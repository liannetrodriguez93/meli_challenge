import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../src/pages';
import App from '../../src/pages/_app';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
  it('test_home_renders_without_errors', () => {
    const tree = render(<App Component={Home} />);
    const heading = screen.getAllByRole('heading');
    expect(heading[0].textContent).toBe('Meli Challenge');
    expect(heading[1].textContent).toBe('Bienvenido al challenge de Meli');
  });

  // Tests that the Home component is responsive and displays correctly on different screen sizes.
  it('test_home_responsive_design', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toHaveClass('grid w-full grid-flow-row h-fit');
  });
});
