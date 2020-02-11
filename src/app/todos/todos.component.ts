import { Component, OnInit } from '@angular/core';
import { TodomgrService } from '../todomgr.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todolist: Array<object>
 
  constructor(private todomgr: TodomgrService) {this.todolist = [...this.todomgr.todolist] }
  removetask(id) {this.todomgr.deltask(id)}
  newtask() {this.todomgr.addtask()}
  ngOnInit(): void {
  }

}
