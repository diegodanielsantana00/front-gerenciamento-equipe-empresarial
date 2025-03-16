import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
// import { KanbanBoardComponent } from './features/kanban/kanban-board/kanban-board.component';
import { authGuard, authGuardLoginRegister } from './core/guards/auth.guard';
import LoginComponent from './features/auth/login/login.component';
import { ProjectListComponent } from './features/project/project-list/project-list.component';
import { ProjectTasksComponent } from './features/project/project-tasks/project-tasks.component';
import { TaskDetailsComponent } from './features/project/task-details/task-details.component';
import { ProjectConfigComponent } from './features/project/project-config/project-config.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [authGuardLoginRegister] },
  { path: 'register', component: RegisterComponent, canActivate: [authGuardLoginRegister] },
  { path: 'project', component: ProjectListComponent, canActivate: [authGuard] }, 
  { path: 'project/:idproject/tasks', component: ProjectTasksComponent, canActivate: [authGuard] }, 
  { path: 'project/:idproject/tasks/:idtask', component: TaskDetailsComponent, canActivate: [authGuard] },
  { path: 'project/:idproject/configuration', component: ProjectConfigComponent, canActivate: [authGuard] },

  // { path: 'project', loadChildren: () => import('./features/project/project.module').then(m => m.ProjectModule), canActivate: [authGuard] }, 

  // { path: 'project', component: KanbanBoardComponent, canActivate: [authGuard] },
  // { path: 'kanban', component: KanbanBoardComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

//Lazy Loading
// const routes: Routes = [
//   { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
//   { path: 'kanban', loadChildren: () => import('./features/kanban/kanban.module').then(m => m.KanbanModule) },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: '**', redirectTo: '/login' }
// ];