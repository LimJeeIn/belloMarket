import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';
import { addOrUpdateToCart, getCart, removeFromCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import { Product } from '../components/Types';

export interface UseCartResult {
  cartQuery: UseQueryResult<Product[], Error>;
  addOrUpdateItem: (product: Product) => void;
  removeItem: (id: string) => void;
}

export default function useCart(): UseCartResult | undefined {
  const { user } = useAuthContext(); // user 객체 전체를 가져옵니다.

  const queryClient = useQueryClient();

  const cartQuery = useQuery<Product[], Error>(
    ['carts', user?.uid],
    () => getCart(user?.uid ?? ''),
    {
      enabled: !!user?.uid,
    },
  );

  const mutationOptions = {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', user?.uid]);
    },
  };

  const addOrUpdateItemMutation = useMutation<void, Error, Product>(
    (product) => addOrUpdateToCart(user?.uid ?? '', product),
    mutationOptions,
  );

  const removeItemMutation = useMutation<void, Error, string>(
    (id) => removeFromCart(user?.uid ?? '', id),
    mutationOptions,
  );

  const addOrUpdateItem = (product: Product) =>
    addOrUpdateItemMutation.mutate(product);

  const removeItem = (id: string) => removeItemMutation.mutate(id);

  return { cartQuery, addOrUpdateItem, removeItem };
}
