import { Product } from './../../product/state/product.model';

export interface CartItem {
  productId: Product['id'];
  quantity: number;
  total: number;
  price: number;
}

export function createCartItem(params: Partial<CartItem>) {
  const total = getPrice(params);
  return {
    total,
    quantity: 1,
    ...params
  } as CartItem;
}

function getPrice(params: Partial<CartItem>): Number {
  if (!params) {
    return 0;
  }
  const quantity = params.quantity || 1;
  return params.price ? params.price * quantity : 0;
}
