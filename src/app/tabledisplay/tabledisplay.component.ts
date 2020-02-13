import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Todo } from '../interfaces/todo.interface'
@Component({
  selector: 'app-tabledisplay',
  templateUrl: './tabledisplay.component.html',
  styleUrls: ['./tabledisplay.component.scss']
})
export class TabledisplayComponent implements OnInit {
  searchtext: string = ""
  test = 5
  isUserRoute: boolean
  @Input('todolist') todolist: Array<Todo>
  @Output() complete = new EventEmitter<number>()

  constructor(private actr: ActivatedRouteSnapshot) {
    this.isUserRoute = actr.url[0].path === 'user'
  }
  ngOnInit(): void {
  }
  markedComp() { this.complete.emit(this.test) }
  initSearch() { console.log(this.searchtext) }

}
