import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { CartStore } from './cart.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor(private cartStore: CartStore,
              private http: HttpClient) {
  }

  get() {
    // this.http.get().subscribe((entities: ServerResponse) => {
      // this.cartStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
      // this.cartStore.add(entity);
    // });
  }

}
