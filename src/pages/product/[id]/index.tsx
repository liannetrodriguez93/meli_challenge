import ProductInfo from '@component/product/ProductInfo';
import { IProductDetail } from '@interfaces/IProductDetail';
import { IProductInfo } from '@interfaces/IProductInfo';
import React from 'react';
import Modal from 'react-modal';
import ProductLayout from './layout';
import ProductDetail from './detail';
import ProductTable from '@component/product/ProductTable';

Modal.setAppElement('#root');

interface Props {
  product: IProductInfo;
  detail: IProductDetail;
}

const ProductData = ({ product, detail }: Props) => {
  return (
    <>
      {product && (
        <ProductLayout>
          <ProductInfo product={product} />
          <div className='text-gray-700 bg-gray-100 rounded shadow '>
            <ProductTable attributes={product.attributes} />
            <ProductDetail detail={detail} />
          </div>
        </ProductLayout>
      )}
    </>
  );
};

export default ProductData;

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  const [resProduct, resDetail] = await Promise.all([
    fetch(`https://api.mercadolibre.com/items/${id}`),
    fetch(`https://api.mercadolibre.com/items/${id}/description`),
  ]);
  const [product, detail] = await Promise.all([
    resProduct.json(),
    resDetail.json(),
  ]);

  return {
    props: {
      product,
      detail,
    },
  };
}
