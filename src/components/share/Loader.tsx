import React from 'react';
import { ScaleLoader } from 'react-spinners';

interface Props {
  loading: boolean;
}

const Loader = ({ loading }: Props) => {
  return (
    <div className='flex items-center justify-center w-full h-full p-16 loader'>
      <ScaleLoader color={'#569DAA'} loading={loading} />
    </div>
  );
};

export default Loader;
