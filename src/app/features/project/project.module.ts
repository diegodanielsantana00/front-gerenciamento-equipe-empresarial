import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ProjectConfigComponent } from './project-config/project-config.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    // HeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule

  ]
})
export class ProjectModule { }
