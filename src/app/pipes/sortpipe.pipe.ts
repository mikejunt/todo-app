import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo.interface'

@Pipe({
  name: 'sortpipe'
})
export class SortpipePipe implements PipeTransform {

  transform(todos: Todo[], sorttype: string): Todo[] {
    let sorttarget = [...todos];
    return todos.sort((a, b) => {
      if (a[sorttype] === b[sorttype]) { return 0 }

      else {
        return a[sorttype] > b[sorttype] ? 1 : -1
      }
    })
  }

}
