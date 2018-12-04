import { CartItem } from './../../state/cart.model';
import { CartQuery } from './../../state/cart.query';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'ae-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$: Observable<CartItem[]>;
  cartLength: number;

  constructor(private _cartQuery: CartQuery) {}

  ngOnInit() {
    this.cart$ = this._cartQuery.selectAll();
    this.cart$
      .pipe(filter(cart => cart.length > 0))
      .subscribe(
        cart =>
          (this.cartLength = cart
            .map(ci => ci.quantity)
            .reduce((q0, q1) => q0 + q1))
      );
  }
}
