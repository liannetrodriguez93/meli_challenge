import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMeliReq } from '@interfaces/IMeliReq';
import { IProductInfo } from '@interfaces/IProductInfo';
import { IProductDetail } from '@interfaces/IProductDetail';

export const fetchProductList = createAsyncThunk(
  'data/fetchProductList',
  async (query: string, _) => {
    const newQuery = query.includes('offset')
      ? query
      : query.concat('&offset=1');
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?${newQuery}&limit=20`
    );
    const data: IMeliReq = await response.json();
    return data;
  }
);

export const fetchProductInfo = createAsyncThunk(
  'data/fetchProductInfo',
  async (id: string, _) => {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data: IProductInfo = await response.json();
    return data;
  }
);

export const fetchProductDetail = createAsyncThunk(
  'data/fetchProductDetail',
  async (id: string, _) => {
    const response = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const data: IProductDetail = await response.json();
    return data;
  }
);
