import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductQuery } from './product/state';

@Component({
  selector: 'ae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'akita-example';
  loading$: Observable<boolean>;

  constructor(
    private _productQuery: ProductQuery,
  ) {}

  ngOnInit(): void {
    this.loading$ = this._productQuery.selectLoading();
  }
}
