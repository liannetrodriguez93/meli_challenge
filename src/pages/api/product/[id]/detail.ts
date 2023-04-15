import { IProductDetail } from '@interfaces/IProductDetail';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProductDetail>
) {
  const { id } = req.query;
  const detail = await fetch(
    `https://api.mercadolibre.com/items/${id}/description`
  );
  const data = await detail.json();

  res.status(200).json(data);
}
