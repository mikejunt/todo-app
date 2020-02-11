import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodomgrService {
  todolist: Array<Todo> = [
    {user: "Mike", name: "Sleep", id: 1}, 
    {user: "Mike", name: "Walk", id: 2 }, 
    {user: "Cody", name: "Hit dingers", id: 3}, 
    {user: "Fred", name: "Whatever", id: 4 }
  ]
  nextid:number = 5;

  constructor() { }
  deltask(id: number) { 
    let idx = this.todolist.findIndex(todo => todo["id"] === id);
    this.todolist.splice(idx,1)
  }
  addtask(user: string, task: string) { 
    this.todolist.push({user: `${user}`, name: `${task}`, id: this.nextid})
    this.nextid++;
  }
  userfilter(username: string) {
  return this.todolist.filter(todo => todo["user"] === username)
  }
  get alltodos() {
    return this.todolist
  }

}


