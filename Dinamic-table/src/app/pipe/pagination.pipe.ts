import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(items: any[], start: number, end: number, pagination: number): any[] {
    if(start >= 0)
      if(start < items.length)
        if (end > start)
          return items.slice(start, end)
        else
          return []
      else
        return items.slice(start - pagination, start + pagination)
    else
      return items.slice(0, pagination)
  }
}
