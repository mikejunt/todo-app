import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  {path: 'user/:username', component: UserComponent},
  {path: 'todos', component: TodosComponent},
  {path: '**', component: TodosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
