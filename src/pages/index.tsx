import BannerCarousel from '@component/BannerCarousel';
import ProductList from '@component/product/ProductList';
import { IMeliReq } from '@interfaces/IMeliReq';

interface MeliRes extends IMeliReq {
  total: number;
}

interface Props {
  dataWithDiscount?: MeliRes;
}

export default function Home({ dataWithDiscount }: Props) {
  return (
    <div className='w-full'>
      {/* <BannerCarousel /> */}
      <h1>Bienvenido a mi sitio web</h1>
      <p>...</p>
    </div>
  );
}

// export async function getStaticProps() {
//   console.log('get static props');
//   const res = await fetch(
//     'https://api.mercadolibre.com/sites/MLA/search?q=:mesa?discount=40-100'
//   );
//   const dataWithDiscount: MeliRes = await res.json();

//   return { props: { dataWithDiscount }, revalidate: 60 };
// }
