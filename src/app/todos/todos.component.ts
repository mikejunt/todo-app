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
  userinput: string = ""
  nameinput: string = ""

  constructor(private todomgr: TodomgrService) { this.todolist = todomgr.alltodos }
  newtask() {
    if (this.userinput.length > 0 && this.nameinput.length > 0) {
      this.todomgr.addtask(this.userinput, this.nameinput); 
      this.todolist = this.todomgr.alltodos
    }
  }
  removetask() {
    this.todolist.filter(t => t.deletion).forEach(td => this.todomgr.deltask(td.id));
    this.todolist = this.todomgr.alltodos;
  }

  ngOnInit(): void {
  }

}
