import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class ProductModule {}
