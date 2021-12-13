import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceProductPageRoutingModule } from './e-commerce-product-page-routing.module';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductImageComponent } from './components/product-image/product-image.component';


@NgModule({
  declarations: [
    ProductHomeComponent,
    HeaderComponent,
    ProductImageComponent
  ],
  imports: [
    CommonModule,
    ECommerceProductPageRoutingModule
  ]
})
export class ECommerceProductPageModule { }
