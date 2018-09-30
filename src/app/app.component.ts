import { Component, OnInit } from '@angular/core';
import { ProductQuery, Product, ProductService } from './product/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'akita-example';
  bussy: boolean;
  products: Array<Product>;

  constructor(
    private _productQuery: ProductQuery,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this._productService.add();
    this._productQuery
      .selectLoading()
      .subscribe(loading => (this.bussy = loading));
    this._productQuery
      .selectAll()
      .subscribe(products => (this.products = products));
  }
}
