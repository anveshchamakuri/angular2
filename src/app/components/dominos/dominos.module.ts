import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DominosRoutingModule } from './dominos-routing.module';
import { PizzaitemsComponent } from './pizzaitems/pizzaitems.component';
import { CartComponent } from './cart/cart.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [PizzaitemsComponent, CartComponent],
  imports: [
    CommonModule,
    DominosRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DominosModule { }
