import ProductDetail from '@component/ProductDetail';
import { IProductDetail } from '@interfaces/IProductDetail';
import { IProductInfo } from '@interfaces/IProductInfo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface Props {
  product: IProductInfo;
  detail: IProductDetail;
}

const customStyles = {
  content: {
    inset: 'auto',
    right: 'auto',
    width: '80%',
    height: '80%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(10%, 10%)',
  },
};

const Product = ({ product, detail }: Props) => {
  return (
    <>
      {product && (
        <Modal isOpen={true} style={customStyles}>
          <ProductDetail product={product} detail={detail} />
          <Link href={'/'}>
            <h1>Cerrar</h1>
          </Link>
        </Modal>
      )}
    </>
  );
};

export default Product;

export async function getServerSideProps({ params }: any) {
  console.log(params);
  const { slug } = params;
  const resProduct = await fetch(`https://api.mercadolibre.com/items/${slug}`);
  const product = await resProduct.json();

  const resDetail = await fetch(
    `https://api.mercadolibre.com/items/${product.id}/description`
  );
  const detail = await resDetail.json();

  return {
    props: {
      product,
      detail,
    },
  };
}
