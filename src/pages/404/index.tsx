import Link from 'next/link';

function Custom404() {
  return (
    <div className='grid w-full h-full place-items-center'>
      <div
        className='relative w-full h-full bg-center bg-no-repeat bg-contain -left-5'
        style={{ backgroundImage: "url('/notFound.jpg')" }}
      ></div>
      <Link href='/'>
        <span className='absolute px-4 py-2 font-bold text-white rounded bg-primary hover:bg-secondary'>
          Volver a la página de inicio
        </span>
      </Link>
    </div>
  );
}

export default Custom404;
