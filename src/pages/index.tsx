import BannerCarousel from '@components/BannerCarousel';

export default function Home() {
  return (
    <div className='grid w-full grid-flow-row h-fit'>
      <BannerCarousel />
      <h2 className='flex justify-center p-4 text-2xl font-semibold text-primary'>
        Bienvenido al challenge de Meli
      </h2>
    </div>
  );
}
