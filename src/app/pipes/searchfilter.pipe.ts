import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo.interface'

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(todoList: Array<Todo>, searchString: string): Array<Todo> {
    searchString = searchString.toLowerCase()
    let searchresult: Array<Todo> = todoList.filter(obj => {
        return obj["user"].toLowerCase().includes(searchString) ||  obj["name"].toLowerCase().includes(searchString) 
    })
    return searchresult
  }
}
