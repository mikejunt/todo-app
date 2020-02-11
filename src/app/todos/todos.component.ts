import { Component, OnInit } from '@angular/core';
import { TodomgrService } from '../todomgr.service';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todolist: Array<Todo>
  user: string = ""
  name: string = ""
 
  constructor(private todomgr: TodomgrService) {this.todolist = todomgr.alltodos}
  newtask() {this.todomgr.addtask(this.user,this.name)}
  ngOnInit(): void {
  }

}
