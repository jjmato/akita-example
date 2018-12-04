import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ProductComponent, ProductListComponent],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductModule {}
