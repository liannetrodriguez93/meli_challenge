import { data } from 'autoprefixer';
import Link from 'next/link';

function Custom404() {
  return (
    <div
      className='grid items-end justify-center w-full h-full bg-center bg-no-repeat bg-contain -left-5'
      style={{ backgroundImage: "url('/notFound.jpg')" }}
      data-testid='not-found-page'
    >
      <Link
        href='/'
        className='relative h-10 px-4 py-2 font-bold text-white rounded bottom-6 w-fit bg-primary hover:bg-secondary'
      >
        <span>Volver a la página de inicio</span>
      </Link>
    </div>
  );
}

export default Custom404;
