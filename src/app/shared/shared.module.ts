import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
