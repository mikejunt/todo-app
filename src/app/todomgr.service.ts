import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodomgrService {
  todolist: Array<Todo> = [
    { user: "Mike", name: "Sleep", id: 1, completed: false },
    { user: "Mike", name: "Walk", id: 2, completed: false },
    { user: "Cody", name: "Hit dingers", id: 3, completed: false },
    { user: "Fred", name: "Whatever", id: 4, completed: false }
  ]
  nextid: number = 5;

  constructor() { }
  deltask(id: number) {
    let idx = this.todolist.findIndex(todo => todo["id"] === id);
    this.todolist.splice(idx, 1)
  }
  addtask(user: string, task: string) {
    this.todolist.push({ user: `${user}`, name: `${task}`, id: this.nextid, completed: false })
    this.nextid++;
  }
  usertodos(username: string) {
    return this.todolist.filter(todo => todo["user"] === username)
  }
  get alltodos() {
    return this.todolist
  }

}


