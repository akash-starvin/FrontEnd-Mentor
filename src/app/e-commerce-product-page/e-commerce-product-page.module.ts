import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceProductPageRoutingModule } from './e-commerce-product-page-routing.module';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    ProductHomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ECommerceProductPageRoutingModule
  ]
})
export class ECommerceProductPageModule { }
