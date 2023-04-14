import ListItem from '@component/ListItem';
import { MeliReq } from '@interfaces/MeliReq';

interface MeliRes extends MeliReq {
  total: number;
}

const fetchDataWithDiscount = async () => {
  const res = await fetch(
    'https://api.mercadolibre.com/sites/MLA/search?q=:mesa?discount=40-100'
  );
  const dataWithDiscount: MeliRes = await res.json();

  return { dataWithDiscount };
};

interface Props {
  dataWithDiscount?: MeliRes;
}

export default function Home({ dataWithDiscount }: Props) {
  return (
    <div className='grid grid-rows-1 gap-4 p-6'>
      {dataWithDiscount && dataWithDiscount.results.length > 0 && (
        <>
          <h1 className=''>Descuentos</h1>
          <ListItem data={dataWithDiscount.results} />
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
