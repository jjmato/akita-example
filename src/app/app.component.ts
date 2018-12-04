import { CartItem } from './cart/state/cart.model';
import { CartQuery } from './cart/state/cart.query';
import { Component, OnInit } from '@angular/core';
import { ProductQuery, ProductService, Product } from './product/state';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'akita-example';
  loading$: Observable<boolean>;
  cart$: Observable<CartItem[]>;
  cartLength: number;

  constructor(
    private _productQuery: ProductQuery,
    private _productService: ProductService,
    private _cartQuery: CartQuery
  ) {}

  ngOnInit(): void {
    this.loading$ = this._productQuery.selectLoading();
    this.cart$ = this._cartQuery.selectAll();
    this.cart$
      .pipe(filter( cart => cart.length > 0 ))
      .subscribe(
        cart =>
          (this.cartLength = cart
            .map(ci => ci.quantity)
            .reduce((q0, q1) => q0 + q1))
      );
  }
}
