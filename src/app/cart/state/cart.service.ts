import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './../../product/state/product.model';
import { CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private cartStore: CartStore, private http: HttpClient) {}

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
    // this.cartStore.set(entities);
    // });
  }

  add(product: Product) {
    this.cartStore.add(product);
  }
}
