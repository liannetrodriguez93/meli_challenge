import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='py-8 text-white bg-darkBlue'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-2/3'>
            <h3 className='mb-2 text-lg'>Datos</h3>
            <p className='text-gray-400'>
              Liannet Yisel Rodriguez Santiesteban
            </p>
            <p className='text-gray-400'>Teléfono: +598 92 479 058</p>
            <p className='text-gray-400'>
              Email: liannet.rodriguez93@gmail.com
            </p>
          </div>
          <div className='w-full mb-4 md:w-1/3 md:mb-0'>
            <h3 className='mb-2 text-lg'>Enlaces útiles</h3>
            <div className='flex items-center'>
              <Link
                href={'https://www.linkedin.com/in/liannetrodriguez/'}
                className='flex flex-row items-center justify-center'
              >
                <span className='flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-secondary hover:bg-blue-800'>
                  <FaLinkedin />
                </span>
                <span className='ml-2 text-gray-400'>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
