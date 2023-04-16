import { Attribute } from '@interfaces/IProductInfo';
import React from 'react';

interface Props {
  attributes: Attribute[];
}

const ProductTable = ({ attributes }: Props) => {
  return (
    <div className='grid grid-flow-row p-4'>
      <h6 className='m-2 text-lg font-semibold'>Características principales</h6>
      <table className='w-full table-auto'>
        <tbody>
          {attributes.map((item) => (
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

export default ProductTable;
