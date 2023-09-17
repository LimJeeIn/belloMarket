import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';
import { BsFilterRight } from 'react-icons/bs';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <div className="flex justify-end max-w-screen-2xl pl-4 pr-4 pt-14 mx-auto">
        <div className="cursor-pointer">
          <BsFilterRight className="ml-auto text-4xl inline-block" />
          <span className="ml-1 text-base leading-snug font-semibold">
            Filters
          </span>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-14 p-4 max-w-screen-2xl m-auto ">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
