import { CartItem } from './cart/state/cart.model';
import { CartQuery } from './cart/state/cart.query';
import { Component, OnInit } from '@angular/core';
import { ProductQuery, ProductService, Product } from './product/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'akita-example';
  loading$: Observable<boolean>;
  products$: Observable<Product[]>;
  cart$: Observable<CartItem[]>;
  cartLength: number;

  constructor(
    private _productQuery: ProductQuery,
    private _productService: ProductService,
    private _cartQuery: CartQuery
  ) {}

  ngOnInit(): void {
    this._productService.add();
    this.loading$ = this._productQuery.selectLoading();
    this.products$ = this._productQuery.selectAll();
    this.cart$ = this._cartQuery.selectAll();
    this.cart$.subscribe( cart => this.cartLength = cart.length);
  }
}
