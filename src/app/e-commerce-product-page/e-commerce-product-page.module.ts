import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceProductPageRoutingModule } from './e-commerce-product-page-routing.module';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProductHomeComponent,
    HeaderComponent,
    ProductImageComponent,
    ProductDetailsComponent,
    GalleryModalComponent
  ],
  imports: [
    CommonModule,
    ECommerceProductPageRoutingModule,
    MatDialogModule
  ]
})
export class ECommerceProductPageModule { }
