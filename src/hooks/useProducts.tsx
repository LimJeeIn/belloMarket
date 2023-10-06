import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts as fetchProducts, addNewProduct } from '../api/firebase';
import { Product } from '../components/Types';

export const useProducts = () => {
  const queryClient = useQueryClient();

  const productsQuery = useQuery<Product[]>(['products'], fetchProducts, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, url }: { product: Product; url: string }) =>
      addNewProduct(
        {
          ...product,
          quantity: product.quantity || 0,
          option: product.option || '',
        },
        url,
      ),
    {
      onSuccess: () => queryClient.invalidateQueries(['products']),
    },
  );

  return { productsQuery, addProduct };
};
