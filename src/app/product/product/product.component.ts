import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  name: string;
  description: string;
  imgSrc: string;
  price: number;

  constructor() {}

  ngOnInit() {
    this.name = this.product.name;
    this.description = this.product.desc;
    this.imgSrc = this.product.imageUrl;
    this.price = this.product.price;
  }
}
