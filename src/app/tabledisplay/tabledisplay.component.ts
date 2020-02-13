import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../interfaces/todo.interface'
@Component({
  selector: 'app-tabledisplay',
  templateUrl: './tabledisplay.component.html',
  styleUrls: ['./tabledisplay.component.scss']
})
export class TabledisplayComponent implements OnInit {
  searchtext: string = ""
  isUserRoute: boolean
  sortfield: string = "id"
  @Input('todolist') todolist: Array<Todo>
  @Output() deleteEvent = new EventEmitter<void>()

  constructor(private actr: ActivatedRoute) {
    this.isUserRoute = this.actr.snapshot.url[0].path === 'user'
  }
  ngOnInit(): void {
  }
  deleteTodos() { this.deleteEvent.emit() }
  sortNow(sort) { this.sortfield = sort}

}
