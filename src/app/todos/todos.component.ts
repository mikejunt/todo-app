import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../todo-store.service'
import { Todo } from '../interfaces/todo.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todolist: Array<Todo>
  userinput: string = ""
  nameinput: string = ""

  constructor(private todomgr: TodoStoreService, private user: UserService) {  }
  newtask() {
    if (this.userinput.length > 0 && this.nameinput.length > 0) {
      this.todomgr.addTodo(this.userinput, this.nameinput); 
    }
  }
  removetask() {
    this.todolist.filter(t => t.deletion).forEach(td => this.todomgr.delTodo(td.id));
  }

  logout() {this.user.logout()}

  ngOnInit(): void { this.todomgr.todos$.subscribe(todos => this.todolist = todos)
  }

}
