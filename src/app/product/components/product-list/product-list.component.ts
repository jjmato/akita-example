import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductQuery } from '../../state';

@Component({
  selector: 'ae-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private _productQuery: ProductQuery) {}

  ngOnInit() {
    this.products$ = this._productQuery.selectAll();
  }
}
