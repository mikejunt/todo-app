import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component'
import { UserGuard } from './guards/user.guard';


const routes: Routes = [
  {path: 'user/:username', component: UserComponent, canActivate: [UserGuard]},
  {path: 'todos', component: TodosComponent, canActivate: [UserGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
