import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { HeaderComponent } from '../shared/components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthModule,
    ProjectModule,
  ]
})
export class FeaturesModule { }
