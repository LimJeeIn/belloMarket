import React from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { BsFilterRight } from 'react-icons/bs';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../components/Types';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: end;
  max-width: 96rem;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 3.5rem;
  margin: auto;
`;

const FilterContent = styled.div`
  cursor: pointer;
`;

const FilterIcon = styled(BsFilterRight)`
  margin-left: auto;
  vertical-align: middle;
  font-size: 2em;
`;

const FilterText = styled.span`
  margin-left: 0.25em;
  font-size: 0.875rem;
  line-height: snug;
  font-weight: bold;
`;

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  gap: 3.5rem;
  padding: 1em;
  max-width: 96rem;
  margin: auto;
`;

type QueryObserverResultType = UseQueryResult<Product[], unknown>;

export default function Products() {
  const {
    productsQuery: { isLoading, error: queryError, data: products },
  }: {
    productsQuery: QueryObserverResultType;
  } = useProducts();
  const error = queryError as Error;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      <FilterContainer>
        <FilterContent>
          <FilterIcon />
          <FilterText>Filters</FilterText>
        </FilterContent>
      </FilterContainer>
      <ProductList>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                title: product.title || '',
                category: product.category || '',
                price: product.price || 0,
              }}
            />
          ))}
      </ProductList>
    </>
  );
}
