import React, { useState } from 'react';
import Image from 'next/image';

const images = [
  'https://http2.mlstatic.com/D_NQ_821490-MLA54434016529_032023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_833202-MLA54935566873_042023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_642973-MLA54936172273_042023-OO.webp',
];

const BannerCarousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div
      id='default-carousel'
      className='relative w-full'
      data-carousel='slide'
    >
      <div className='relative h-32 overflow-hidden md:h-72'>
        {images.map((image, index) => (
          <div key={`image-${index}`} data-carousel-item>
            <Image
              src={image}
              alt={`Banner image ${index + 1}`}
              className={`${
                index === activeImage ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-1000 ease-out absolute inset-0 w-full object-cover`}
              quality={100}
              fill
              priority
            />
          </div>
        ))}
      </div>
      <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
        {images.map((_, index) => (
          <button
            key={`button-${index}`}
            type='button'
            className={`${
              index === activeImage ? 'bg-primary' : 'bg-gray-500'
            } w-3 h-3 rounded-full sm:w-4 sm:h-4 focus:outline-none transition-colors duration-200`}
            aria-current='false'
            aria-label='Slide 2'
            data-carousel-slide-to={index}
            onClick={() => setActiveImage(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
