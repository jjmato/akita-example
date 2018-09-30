import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { ProductStore } from './product.store';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private productStore: ProductStore, private http: HttpClient) {
    if (this.productStore.isPristine) {
      this.initData();
    }
  }

  get() {
    this.http
      .get<Array<Product>>(
        'https://5bb0aa726418d70014071ba2.mockapi.io/cool-phone'
      )
      .subscribe(products => {
        this.productStore.set(products);
      });
  }

  add() {
    // this.http.post().subscribe((entity: ServerResponse) => {
    // this.productStore.add(entity);
    // });
    // this.productStore.add({ ID: 0 });
  }

  private initData(): void {
    this.get();
  }
}
