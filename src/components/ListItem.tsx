import React from 'react';
import Item from './Item';
import { Result } from '@interfaces/MeliReq';

interface Props {
  data: Result[];
}

const ListItem = ({ data }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListItem;
