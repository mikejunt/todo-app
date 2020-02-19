import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../interfaces/todo.interface'
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-tabledisplay',
  templateUrl: './tabledisplay.component.html',
  styleUrls: ['./tabledisplay.component.scss']
})

export class TabledisplayComponent implements OnInit {
  searchtext: string = ""
  isUserRoute: boolean
  sortfield: string = "id"
  userinput: string
  nameinput: string
  @Input('todolist') todolist: Array<Todo>
  @Output() deleteEvent = new EventEmitter<void>()

  constructor(private actr: ActivatedRoute, private todomgr: TodoStoreService) {
    this.isUserRoute = this.actr.snapshot.url[0].path === 'user';
    if (this.isUserRoute) {this.userinput = this.actr.snapshot.url[1].path}
  }
  ngOnInit(): void {
  }
  
  deleteTodos() { this.deleteEvent.emit() }
  sortNow(sort) { this.sortfield = sort }
  
  newtask() {
    if (this.userinput.length > 0 && this.nameinput.length > 0) {
      this.todomgr.addTodo(this.userinput, this.nameinput); 
    }
  }

}
