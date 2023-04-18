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
    <div className='relative'>
      <div className='absolute inset-0'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === activeImage ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 ease-out absolute inset-0 w-full h-full`}
          >
            <Image
              src={image}
              alt={`Banner image ${index + 1}`}
              quality={100}
              fill
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
      <div className='absolute bottom-0 w-full'>
        <ul className='flex justify-center'>
          {images.map((image, index) => (
            <li key={index} className='mr-3'>
              <button
                className={`${
                  index === activeImage ? 'bg-white' : 'bg-gray-500'
                } w-4 h-4 rounded-full focus:outline-none transition-colors duration-200`}
                onClick={() => setActiveImage(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BannerCarousel;
