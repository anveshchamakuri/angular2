import { ActiveguardGuard } from './../../shared/activeguard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { ItemslistComponent } from './itemslist/itemslist.component';
const routes: Routes = [
  {path: 'additem', component: AdditemComponent, canActivate: [ActiveguardGuard]}, // guard check the user
  {path: 'itemslist', component: ItemslistComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
