import { ActiveguardGuard } from './../../shared/activeguard.guard';
import { SampleDirective } from './../../shared/sample.directive';
import { ItemserivesService } from './itemserives.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { AdditemComponent } from './additem/additem.component';
import { ItemslistComponent } from './itemslist/itemslist.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdditemComponent, ItemslistComponent,SampleDirective],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule { }
