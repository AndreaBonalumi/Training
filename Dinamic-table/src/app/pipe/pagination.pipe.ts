import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(items: any[], start: number, end: number): any[] {
    return items.slice(start, end)
  }

}
