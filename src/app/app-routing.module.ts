import { AuthviewComponent } from './components/layout/authview/authview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullviewdataComponent } from './components/layout/fullviewdata/fullviewdata.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthviewComponent,
    children: [
      { path: 'auth', loadChildren: './components/authentication/authentication.module#AuthenticationModule' },
  
       ]
  },
{
  path: '',
  component: FullviewdataComponent,
  children: [
    { path: 'item', loadChildren: './components/items/items.module#ItemsModule' },
    { path: 'products', loadChildren: './components/products/products.module#ProductsModule' },
    { path: 'dominos', loadChildren: './components/dominos/dominos.module#DominosModule' },

     ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
