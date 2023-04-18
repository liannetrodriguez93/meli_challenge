import React from 'react';
import Image from 'next/image';

const images = [
  'https://http2.mlstatic.com/D_NQ_821490-MLA54434016529_032023-OO.webp',
];

const BannerCarousel = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000 ease-out absolute inset-0 w-full`}
          >
            <Image
              src={image}
              alt={`Banner image ${index + 1}`}
              quality={100}
              fill
              style={{ objectFit: 'cover' }}
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
                  index === 0 ? 'bg-white' : 'bg-gray-500'
                } w-4 h-4 rounded-full focus:outline-none transition-colors duration-200`}
                onClick={() => console.log('first')}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BannerCarousel;
