import Link from 'next/link';

function Custom404() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='mb-2 text-3xl font-bold'>Página no encontrada</h1>
      <p className='text-lg text-gray-700'>
        La página que estás buscando no existe.
      </p>
      <Link href='/' legacyBehavior>
        <a className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
          Volver a la página de inicio
        </a>
      </Link>
    </div>
  );
}

export default Custom404;
