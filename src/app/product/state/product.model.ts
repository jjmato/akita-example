import { ID } from '@datorama/akita';

export interface Product {
  id: ID;
  name: string;
  desc: string;
  img: string;
  price: number;
}

export function createProduct(params: Partial<Product>) {
  return {} as Product;
}
