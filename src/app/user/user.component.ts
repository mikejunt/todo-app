import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../interfaces/todo.interface';
import { UserService } from '../user.service';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usertodos: Array<Todo>
  username: string;

  constructor(private todomgr: TodoStoreService, private actr: ActivatedRoute, private user: UserService) { }

  logout() { this.user.logout() }
  ngOnInit(): void {
    this.username = this.actr.snapshot.params.username;
    this.todomgr.todos$.subscribe(todos => this.usertodos = todos.filter(Todo => Todo["user"] === this.username))
  }
  
  removetask() {
    this.usertodos.filter(t => t.deletion).forEach(td => this.todomgr.delTodo(td.id));
  }
}
