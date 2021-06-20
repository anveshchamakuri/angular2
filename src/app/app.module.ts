import { DominosModule } from './components/dominos/dominos.module';
import { ExampleinterceptorInterceptor } from './shared/exampleinterceptor.interceptor';
import { ActiveguardGuard } from './shared/activeguard.guard';
import { UrlconfigService } from './helper/urlconfig.service';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { ProductsModule } from './components/products/products.module';
import { ItemsModule } from './components/items/items.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FullviewdataComponent } from './components/layout/fullviewdata/fullviewdata.component';
import { AuthviewComponent } from './components/layout/authview/authview.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { NgxOrgChartModule } from 'ngx-org-chart';

@NgModule({
  declarations: [
    AppComponent,
    FullviewdataComponent,
    AuthviewComponent,
  ],
  imports: [
    NgxOrgChartModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DominosModule
  ],
  providers: [HttpClient, {provide : HTTP_INTERCEPTORS, useClass: ExampleinterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
