import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabledisplay',
  templateUrl: './tabledisplay.component.html',
  styleUrls: ['./tabledisplay.component.scss']
})
export class TabledisplayComponent implements OnInit {
@Input('todolist') todolist
  constructor() { }

  ngOnInit(): void {
  }

}
