import { PizzaitemsComponent } from './pizzaitems/pizzaitems.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: PizzaitemsComponent },
  {path: 'cart', component: CartComponent },
  {path: 'pizzaitems', component: PizzaitemsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DominosRoutingModule { }
