import { Component, OnInit } from '@angular/core';
import { TodomgrService } from '../todomgr.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../interfaces/todo.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usertodos: Array<Todo> = []
  username: string;

  constructor(private todomgr: TodomgrService, private actr: ActivatedRoute, private user: UserService) { }

  logout() { this.user.logout() }
  ngOnInit(): void {
    this.username = this.actr.snapshot.params.username;
    this.usertodos = this.todomgr.usertodos(this.username)
  }
  removetask() {
    this.usertodos.filter(t => t.deletion).forEach(td => this.todomgr.deltask(td.id));
    this.usertodos = this.todomgr.usertodos(this.username);
  }
}
