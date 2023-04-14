import { useState, useEffect } from 'react';

const useGetWindowSize = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const getScreenSize = () => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    getScreenSize();
    window.addEventListener('resize', getScreenSize);

    return () => {
      window.removeEventListener('resize', getScreenSize);
    };
  }, []);

  return {
    screenSize,
  };
};

export default useGetWindowSize;
