import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(todoList: Array<Object>, searchString: string): Array<Object> {
    searchString = searchString.toLowerCase()
    let searchresult: Array<Object> = todoList.filter(obj => {
        return obj["user"].toLowerCase().includes(searchString) ||  obj["name"].toLowerCase().includes(searchString) 
    })
    return searchresult
  }
}
