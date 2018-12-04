import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './../../product/state/product.model';
import { CartQuery } from './cart.query';
import { CartStore } from './cart.store';
import { createCartItem } from './cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(
    private _cartQuery: CartQuery,
    private _cartStore: CartStore,
    private _http: HttpClient
  ) {}

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
    // this.cartStore.set(entities);
    // });
  }

  addProdcutToCart(product: Product) {
    const productId = product.id;
    const price = product.price;
    const findCartItem = this._cartQuery.getEntity(productId);
    if (findCartItem) {
      return this._cartStore.updateQuantity(productId);
    }
    const cartItem = createCartItem({ productId, price });
    return this._cartStore.add(cartItem);
  }
}
