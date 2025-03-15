import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { KanbanBoardComponent } from './features/kanban/kanban-board/kanban-board.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'kanban', component: KanbanBoardComponent },
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