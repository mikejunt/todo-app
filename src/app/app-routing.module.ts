import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component'
import { UserGuard } from './guards/user.guard';
import { PopupComponent } from './popup/popup.component';


const routes: Routes = [
  {path: 'user/:username', component: UserComponent, canActivate: [UserGuard]},
  {path: 'todos', component: TodosComponent, canActivate: [UserGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'edit', component: PopupComponent, outlet: 'popup'},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
