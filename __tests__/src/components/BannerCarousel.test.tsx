import BannerCarousel from '@components/BannerCarousel';
import { fireEvent, render, screen } from '@testing-library/react';

describe('BannerCarousel', () => {
  // Tests that BannerCarousel displays the correct image when a button is clicked.
  it('test_banner_carousel_displays_correct_image', () => {
    render(<BannerCarousel />);

    const firstImage = screen.getByAltText('Banner image 1');
    const secondImage = screen.getByAltText('Banner image 2');
    const firstButton = screen.getAllByRole('button')[0];
    const secondButton = screen.getAllByRole('button')[1];

    expect(firstImage).toHaveClass('opacity-100');
    expect(secondImage).toHaveClass('opacity-0');

    fireEvent.click(secondButton);

    expect(firstImage).toHaveClass('opacity-0');
    expect(secondImage).toHaveClass('opacity-100');

    fireEvent.click(firstButton);

    expect(firstImage).toHaveClass('opacity-100');
    expect(secondImage).toHaveClass('opacity-0');
  });
});
