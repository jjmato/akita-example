import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from './../../product/state/product.model';
import { CartItem } from './cart.model';

export interface CartState extends EntityState<CartItem> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart', idKey: 'productId' })
export class CartStore extends EntityStore<CartState, CartItem> {
  constructor() {
    super();
  }
  updateQuantity(productId: Product['id']) {
    this.update(productId, entity => {
      return { ...entity, quantity: entity.quantity + 1 };
    });
  }
}
