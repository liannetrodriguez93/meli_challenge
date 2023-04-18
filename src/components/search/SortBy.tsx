import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';
import { useAppSelector } from '@hooks/useHookApp';
import { ISort } from '@interfaces/IMeliReq';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();
  const { sortSelected, availableSorts } = useAppSelector(
    (state) => state.productListSlice
  );

  console.log(sortSelected);

  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={`${
              open ? 'text-blue-500' : 'text-gray-500'
            } inline-flex items-center justify-center px-4 py-2 text-base text-white bg-primary rounded-md shadow-sm w-fit focus:outline-none focus:ring-offset-2 focus:ring-secondary`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='font-semibold text-white'>Ordenar por:</span>
            <span className='ml-2 underline'>{sortSelected.name}</span>
            <FaChevronDown
              className={`${
                open ? 'text-secondary rotate-180' : 'text-white'
              } ml-2 h-3 w-3`}
              aria-hidden='true'
            />
          </Popover.Button>
          <Transition
            show={isOpen}
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Popover.Panel
              static
              className='absolute right-0 z-10 px-4 mt-1 origin-top-right bg-white rounded-md shadow-lg w-fit ring-1 ring-black ring-opacity-5 focus:outline-none'
            >
              <div className='w-full'>
                {availableSorts.map((sort: ISort) => {
                  const splitedQueries = asPath
                    .split('&')
                    .filter(
                      (query) =>
                        !query.includes('sort') && !query.includes('offset')
                    )
                    .join('&');
                  console.log(sortSelected.id);
                  console.log(sort.id);
                  console.log(sortSelected.id === sort.id);
                  return (
                    <Link href={`${splitedQueries}&sort=${sort.id}`}>
                      <h2
                        className={`w-full m-2 text-black hover:text-primary ${
                          sortSelected.id === sort.id ? 'bg-secondary' : ''
                        }`}
                      >
                        {sort.name}
                      </h2>
                    </Link>
                  );
                })}
                {/* <div className='grid grid-cols-2 p-4 text-black'>
                  <a href='/analytics'>Analytics</a>
                  <a href='/engagement'>Engagement</a>
                  <a href='/security'>Security</a>
                  <a href='/integrations'>Integrations</a>
                </div> */}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default SortBy;
