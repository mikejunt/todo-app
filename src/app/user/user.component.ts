import { Component, OnInit } from '@angular/core';
import { TodomgrService } from '../todomgr.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usertodos: Array<Todo> = []
  username: string;

  constructor(private todomgr: TodomgrService, private actr: ActivatedRoute) {
    this.username = actr.snapshot.params.username;
    this.usertodos = todomgr.userfilter(this.username)
   }

  logit() {console.log(this.usertodos)}
  ngOnInit(): void {
  }
  removetask(id:number) {this.todomgr.deltask(id)}
}
