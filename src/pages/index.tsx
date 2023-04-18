import BannerCarousel from '@components/BannerCarousel';
import { IMeliReq } from '@interfaces/IMeliReq';

interface MeliRes extends IMeliReq {
  total: number;
}

interface Props {
  dataWithDiscount?: MeliRes;
}

export default function Home({ dataWithDiscount }: Props) {
  return (
    <div className='grid w-full h-full grid-flow-row'>
      <BannerCarousel />
      <h1 className='flex justify-center p-4 text-2xl font-semibold text-primary'>
        Bienvenido al challenge de Meli
      </h1>
      <p>...</p>
    </div>
  );
}
