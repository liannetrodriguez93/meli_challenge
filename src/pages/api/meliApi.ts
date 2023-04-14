// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MeliReq } from '@interfaces/MeliReq';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MeliReq>
) {
  console.log(req);
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLA/search?q=:mesa'
  );
  const data = await response.json();
  res.status(200).json(data);
}
