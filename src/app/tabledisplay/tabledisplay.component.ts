import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabledisplay',
  templateUrl: './tabledisplay.component.html',
  styleUrls: ['./tabledisplay.component.scss']
})
export class TabledisplayComponent implements OnInit {
  searchtext: string = ""
  searchtype: string = ""
  test = 5
@Input('todolist') todolist
@Output() complete = new EventEmitter<number>()
markedComp() {this.complete.emit(this.test)}
initSearch() {console.log(this.searchtext, this.searchtype)}
  constructor() { }
  ngOnInit(): void {
  }

}
