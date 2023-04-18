import { useAppSelector } from '@hooks/useHookApp';
import { ISort } from '@interfaces/IMeliReq';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  sortItem: ISort;
}

const SortByItem = ({ sortItem }: Props) => {
  const { asPath } = useRouter();
  const { sortSelected } = useAppSelector((state) => state.productList);

  const splitedQueries = asPath
    .split('&')
    .filter((query) => !query.includes('sort') && !query.includes('offset'))
    .join('&');

  return (
    <Link href={`${splitedQueries}&sort=${sortItem.id}`}>
      <h2
        className={`w-full m-2 text-black hover:text-primary ${
          sortSelected.id === sortItem.id ? 'bg-secondary' : ''
        }`}
      >
        {sortItem.name}
      </h2>
    </Link>
  );
};

export default SortByItem;
