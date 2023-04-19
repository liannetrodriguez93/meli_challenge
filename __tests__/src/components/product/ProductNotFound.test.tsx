import ProductNotFound from '@components/product/ProductNotFound';
import { render, screen } from '@testing-library/react';

describe('ProductNotFound', () => {
  // Tests that the function renders without errors.
  it('test_renders_without_errors', () => {
    render(<ProductNotFound />);
    expect(
      screen.getByText(/No se encontraron resultados/i)
    ).toBeInTheDocument();
  });

  // Tests that the function displays the correct content.
  it('test_display_content', () => {
    render(<ProductNotFound />);
    expect(
      screen.getByText(
        /Lo sentimos, no se encontraron elementos para su búsqueda./i
      )
    ).toBeInTheDocument();
  });

  // Tests that all elements are displayed correctly.
  it('test_display_elements', () => {
    const { container } = render(<ProductNotFound />);
    expect(
      screen.getByRole('heading', { name: /No se encontraron resultados/i })
    ).toBeInTheDocument();
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(
      screen.getByText(
        /Lo sentimos, no se encontraron elementos para su búsqueda./i
      )
    ).toBeInTheDocument();
  });
});
