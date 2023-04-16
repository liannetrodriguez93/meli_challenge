import ListProduct from '@component/product/ListProduct';
import { MeliReq } from '@interfaces/MeliReq';

interface MeliRes extends MeliReq {
  total: number;
}

interface Props {
  dataWithDiscount?: MeliRes;
}

export default function Home({ dataWithDiscount }: Props) {
  return (
    <div className='grid grid-rows-1 gap-4 p-4'>
      {dataWithDiscount && dataWithDiscount.results.length > 0 && (
        <>
          <h1 className=''>Descuentos</h1>
          <ListProduct data={dataWithDiscount.results} />
        </>
      )}
    </div>
  );
}

export async function getStaticProps() {
  console.log('get static props');
  const res = await fetch(
    'https://api.mercadolibre.com/sites/MLA/search?q=:mesa?discount=40-100'
  );
  const dataWithDiscount: MeliRes = await res.json();

  return { props: { dataWithDiscount }, revalidate: 60 };
}
