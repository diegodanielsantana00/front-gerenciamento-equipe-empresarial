import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
// import { KanbanBoardComponent } from './features/kanban/kanban-board/kanban-board.component';
import { authGuard } from './core/guards/auth.guard';
import LoginComponent from './features/auth/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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