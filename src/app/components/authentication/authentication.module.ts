import { AuthenticationService } from './authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import {ReactiveFormsModule } from '@angular/forms';
import {Routes,RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AuthenticationModule { }
