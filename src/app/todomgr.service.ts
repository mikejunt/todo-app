import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodomgrService {
  todolist: Array<Object> = [
    {user: "Mike", name: "Sleep", id: 1}, 
    {user: "Mike", name: "Walk", id: 2 }, 
    {user: "Cody", name: "Hit dingers", id: 3}, 
    {user: "Fred", name: "Whatever", id: 4 }
  ]
  nextid:number = 5;

  constructor() { }
  deltask(id) { 
    let idx = this.todolist.findIndex(todo => todo["id"] === id);
    this.todolist.splice(idx,1)
  }
  addtask() { console.log("This would add a task.") }
}


