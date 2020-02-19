import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './interfaces/todo.interface';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {
  nextid: number = 5
  private readonly _todos = new BehaviorSubject<Todo[]>([
  { user: "Mike", name: "Sleep", id: 1, completed: false },
  { user: "Mike", name: "Walk", id: 2, completed: false },
  { user: "Cody", name: "Hit dingers", id: 3, completed: false },
  { user: "Fred", name: "Whatever", id: 4, completed: false }
])

readonly todos$ = this._todos.asObservable()
readonly completedtodos$ = this.todos$.pipe(
  map(todos => this.todos.filter(todo => todo.completed))
)

private get todos(): Todo[] {return this._todos.getValue()}
private set todos(changedtodos: Todo[]) {this._todos.next(changedtodos)}

addTodo(user: string, task: string) {
  this.todos = [...this.todos, {id: this.nextid, user: user, name: task, completed: false}];
  this.nextid++;
}
delTodo(id: number) {
  let idx = this.todos.findIndex(todo => todo["id"] === id);
  this.todos.splice(idx,1);
  this.todos = [...this.todos]
}

  constructor() { }
}
