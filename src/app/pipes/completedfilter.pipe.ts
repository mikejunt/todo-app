import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedfilter'
})
export class CompletedfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
