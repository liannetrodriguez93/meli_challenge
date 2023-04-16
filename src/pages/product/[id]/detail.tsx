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
    <section className='p-4 mb-2 text-sm md:text-base'>
      <div className='max-w-screen-md mx-auto whitespace-pre-wrap'>
        <h6 className='mb-2 text-lg font-semibold'>Descripción</h6>
        <p className='text-left'>{detail?.plain_text}</p>
      </div>
    </section>
  );
}

export default ProductDetail;
