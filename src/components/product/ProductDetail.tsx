import { useAppSelector } from '@hooks/useHookApp';

function ProductDetail() {
  const { selectedProductDetail } = useAppSelector(
    (state) => state.productInfoSlice
  );

  return (
    <section className='p-4 mb-2 text-sm md:text-base'>
      <div className='max-w-screen-md mx-auto whitespace-pre-wrap'>
        <h6 className='mb-2 text-lg font-semibold'>Descripción</h6>
        <p className='text-left'>{selectedProductDetail?.plain_text}</p>
      </div>
    </section>
  );
}

export default ProductDetail;
