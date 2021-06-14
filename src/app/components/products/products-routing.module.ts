import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductslistComponent } from './productslist/productslist.component';

const routes: Routes = [
  {path: 'addproduct', component: AddproductComponent },
  {path: 'productslist', component: ProductslistComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
