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
  marktarget: number
 
  constructor(private todomgr: TodomgrService) {this.todolist = todomgr.alltodos}
  newtask() {this.todomgr.addtask(this.userinput,this.nameinput)}
  completemark(val) {console.log(val)}
  ngOnInit(): void {
  }

}
