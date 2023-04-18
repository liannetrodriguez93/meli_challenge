import { useAppSelector } from '@hooks/useHookApp';
import { IAttribute } from '@interfaces/IProductInfo';
import React from 'react';

const ProductTableAtributes = () => {
  const { selectedProductInfo } = useAppSelector(
    (state) => state.productInfoSlice
  );

  return (
    <div className='grid grid-flow-row p-4'>
      <h6 className='m-2 text-lg font-semibold'>Características principales</h6>
      <table className='w-full table-auto'>
        <tbody>
          {selectedProductInfo?.attributes.map((item: IAttribute) => (
            <tr key={item.name}>
              <td className='px-4 py-2 border'>{item.name}</td>
              <td className='px-4 py-2 border'>{item.value_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTableAtributes;
