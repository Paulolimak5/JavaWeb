import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './service/products/products.component';



@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductsComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
