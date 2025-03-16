import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import LoginComponent from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AuthModule,
  ]
})
export class FeaturesModule { }
