import { IProductDetail } from '@interfaces/IProductDetail';
import { useRouter } from 'next/router';

interface Props {
  detail?: IProductDetail;
}

function ProductDetail({ detail }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  return (
    <section className='p-4 my-4 text-sm text-gray-700 bg-gray-100 rounded shadow md:text-xl'>
      <div className='max-w-screen-md mx-auto whitespace-pre-wrap'>
        <p className='text-left'>{detail?.plain_text}</p>
      </div>
    </section>
  );
}

export default ProductDetail;
