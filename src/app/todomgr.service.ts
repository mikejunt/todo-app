import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodomgrService {
todolist: Array<Object> = [{user: "Mike", name: "Sleep"}, {user: "Mike", name: "Walk"}, {user: "Cody", name: "Hit dingers"}, {user: "Fred", name: "Whatever"}]

  constructor() { }
 
}


