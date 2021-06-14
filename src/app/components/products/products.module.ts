import { SetgenderPipe } from './../../shared/setgender.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductslistComponent } from './productslist/productslist.component';
import {FormsModule } from '@angular/forms'
@NgModule({
  declarations: [AddproductComponent, ProductslistComponent,SetgenderPipe],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
  ]
})
export class ProductsModule { }
